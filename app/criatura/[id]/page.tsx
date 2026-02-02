import Link from 'next/link'
import Image from 'next/image'
import bestiarioData from '@/data/bestiario.json'
import styles from './page.module.css'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  return bestiarioData.criaturas.map((criatura) => ({
    id: criatura.id,
  }))
}

export default function CriaturaPage({ params }: { params: { id: string } }) {
  const criatura = bestiarioData.criaturas.find(c => c.id === params.id)
  
  if (!criatura) {
    notFound()
  }

  // Encontrar criatura anterior e próxima
  const currentIndex = bestiarioData.criaturas.findIndex(c => c.id === params.id)
  const anterior = currentIndex > 0 ? bestiarioData.criaturas[currentIndex - 1] : null
  const proxima = currentIndex < bestiarioData.criaturas.length - 1 ? bestiarioData.criaturas[currentIndex + 1] : null

  return (
    <main className={styles.main}>
      <nav className={styles.breadcrumb}>
        <Link href="/">← Voltar ao Índice</Link>
      </nav>

      <article className={styles.livro}>
        {/* Página Esquerda - Ilustração */}
        <div className={styles.pagina_esquerda}>
          <div className={styles.ilustracao_container}>
            <div className={styles.ilustracao_frame}>
              <Image
                src={criatura.ilustracao_src}
                alt={`Ilustração de ${criatura.nome_comum}`}
                width={400}
                height={400}
                className={styles.ilustracao}
                priority
              />
            </div>
            <p className={styles.legenda}>
              {criatura.nome_comum}<br />
              <span className={styles.nome_cientifico}>({criatura.classificacao})</span>
            </p>
          </div>

          <div className={styles.ficha_tecnica}>
            <h3>Ficha Técnica</h3>
            <dl>
              <dt>Nome Comum:</dt>
              <dd>{criatura.nome_comum}</dd>
              
              <dt>Classificação:</dt>
              <dd>{criatura.classificacao}</dd>
              
              <dt>Nível de Ameaça:</dt>
              <dd>
                <span className={`${styles.badge_ameaca} ${styles['ameaca_' + criatura.nivel_ameaca.toLowerCase()]}`}>
                  {criatura.nivel_ameaca}
                </span>
              </dd>
            </dl>
          </div>
        </div>

        {/* Página Direita - Informações */}
        <div className={styles.pagina_direita}>
          <header className={styles.cabecalho}>
            <h1>{criatura.nome_comum}</h1>
            <div className={styles.decoracao}>⚔</div>
          </header>

          <section className={styles.secao}>
            <h2>Habitat</h2>
            <p>{criatura.habitat}</p>
          </section>

          <section className={styles.secao}>
            <h2>Comportamento</h2>
            <p>{criatura.comportamento}</p>
          </section>

          <section className={styles.secao_observacoes}>
            <h2>Observações do Caçador</h2>
            <div className={styles.nota_manuscrita}>
              <p>{criatura.observacoes_cacador}</p>
              <div className={styles.assinatura}>— Anotações de campo</div>
            </div>
          </section>
        </div>
      </article>

      {/* Navegação entre páginas */}
      <nav className={styles.navegacao}>
        <div className={styles.nav_anterior}>
          {anterior && (
            <Link href={`/criatura/${anterior.id}`} className={styles.nav_link}>
              <span className={styles.nav_seta}>←</span>
              <div className={styles.nav_info}>
                <span className={styles.nav_label}>Anterior</span>
                <span className={styles.nav_nome}>{anterior.nome_comum}</span>
              </div>
            </Link>
          )}
        </div>

        <div className={styles.nav_proxima}>
          {proxima && (
            <Link href={`/criatura/${proxima.id}`} className={styles.nav_link}>
              <div className={styles.nav_info}>
                <span className={styles.nav_label}>Próxima</span>
                <span className={styles.nav_nome}>{proxima.nome_comum}</span>
              </div>
              <span className={styles.nav_seta}>→</span>
            </Link>
          )}
        </div>
      </nav>
    </main>
  )
}
