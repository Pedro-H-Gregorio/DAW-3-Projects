import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class DiarioDTO {
  @IsNotEmpty({
    message: "O atributo de 'nomeAutor' não pode ser nulo ou vázio",
  })
  nomeAutor: string;

  @IsNotEmpty({
    message: "O atributo de 'email' não pode ser nulo ou vázio",
  })
  @IsEmail({}, { message: 'E-mail inválido.' })
  email: string;

  categoria?: string;

  @IsNotEmpty({
    message: "O atributo de 'descricao' não pode ser nulo ou vázio",
  })
  descricao: string;

  imagemPath?: string;

  @IsNotEmpty({ message: "O atributo de 'titulo' não pode ser nulo ou vázio" })
  @IsString()
  titulo: string;

  dhPostagem: string;
}
