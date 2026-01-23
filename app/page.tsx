import Link from 'next/link'
import bestiarioData from '@/data/bestiario.json'
import styles from './page.module.css'

export default function Home() {
  const criaturas = bestiarioData.criaturas

  // Agrupar criaturas por classificação
  const classificacoes = Array.from(new Set(criaturas.map(c => c.classificacao)))

  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <h1 className={styles.titulo}>Manual de Campo do Caçador</h1>
        <p className={styles.subtitulo}>
          Bestiário de Criaturas Sobrenaturais<br />
          <span className={styles.autor}>Baseado nos relatos de caçadores experientes</span>
        </p>
      </header>

      <div className={styles.indice}>
        <h2 className={styles.indice_titulo}>Índice de Criaturas</h2>
        
        {classificacoes.map(classificacao => {
          const criaturasCategoria = criaturas.filter(c => c.classificacao === classificacao)
          
          return (
            <section key={classificacao} className={styles.categoria}>
              <h3 className={styles.categoria_titulo}>{classificacao}s</h3>
              <div className={styles.grid}>
                {criaturasCategoria.map(criatura => (
                  <Link 
                    key={criatura.id} 
                    href={`/criatura/${criatura.id}`}
                    className={styles.card}
                  >
                    <div className={styles.card_imagem}>
                      <div className={styles.placeholder}>
                        {criatura.nome_comum.charAt(0)}
                      </div>
                    </div>
                    <div className={styles.card_info}>
                      <h4 className={styles.card_nome}>{criatura.nome_comum}</h4>
                      <p className={styles.card_classificacao}>{criatura.classificacao}</p>
                      <span className={`${styles.card_ameaca} ${styles['ameaca_' + criatura.nivel_ameaca.toLowerCase()]}`}>
                        {criatura.nivel_ameaca}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )
        })}
      </div>

      <footer className={styles.footer}>
        <p>— Que este manual guie seus passos e preserve sua vida —</p>
      </footer>
    </main>
  )
}
