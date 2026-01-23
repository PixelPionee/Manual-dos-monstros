import Link from 'next/link'
import styles from './not-found.module.css'

export default function NotFound() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.titulo}>Criatura Não Encontrada</h1>
        <p className={styles.texto}>
          A criatura que procuras não consta neste manual.<br />
          Talvez tenha sido extinta... ou nunca existiu.
        </p>
        <div className={styles.ilustracao}>⚔</div>
        <Link href="/" className={styles.botao}>
          Retornar ao Índice
        </Link>
      </div>
    </div>
  )
}
