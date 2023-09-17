export type CardType = {
    id: string;
    titulo: string;
    conteudo: string;
    lista: string;
  };

export type UserType = {
    _id: string;
    login: string;
};

export type UserDataType = {
  login: string;
  senha: string;
};

export type LoginType = {
  user: UserType;
  token: string;
};