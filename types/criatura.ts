export interface Criatura {
  id: string;
  nome_comum: string;
  classificacao: string;
  ilustracao_src: string;
  habitat: string;
  comportamento: string;
  nivel_ameaca: "Extremo" | "Alto" | "Moderado" | "Baixo";
  observacoes_cacador: string;
  origem_da_informacao: "Encontro Pessoal" | "Relato de Terceiros";
}

export interface BestiarioData {
  criaturas: Criatura[];
}
