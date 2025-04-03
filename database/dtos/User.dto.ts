import { IsEmail, IsNotEmpty, Length, IsDateString, IsOptional } from 'class-validator';
import { Exclude, Expose } from 'class-transformer';

export class UserDto {
    @Expose()
    id: number;

    @IsNotEmpty({ message: 'La matrícula no puede estar vacía' })
    @Length(10, 10, { message: 'La matrícula debe tener 10 caracteres' })
    @Expose()
    matricula: string;

    @IsNotEmpty({ message: 'El nombre no puede estar vacío' })
    @Length(2, 50, { message: 'El nombre debe tener entre 2 y 50 caracteres' })
    @Expose()
    nombre: string;

    @IsNotEmpty({ message: 'El apellido no puede estar vacío' })
    @Length(2, 50, { message: 'El apellido debe tener entre 2 y 50 caracteres' })
    @Expose()
    apellido: string;

    @IsEmail({}, { message: 'Debe ser un email válido' })
    @Expose()
    email: string;

    @IsNotEmpty({ message: 'La contraseña no puede estar vacía' })
    @Length(6, 16, { message: 'La contraseña debe tener entre 6 y 16 caracteres' })
    @Expose()
    password: string;

    @IsDateString({}, { message: 'Debe ser una fecha válida (formato: YYYY-MM-DD)' })
    @Expose()
    fecha_inicio: string;

    @IsOptional()
    @IsDateString({}, { message: 'Debe ser una fecha válida (formato: YYYY-MM-DD)' })
    @Expose()
    fecha_actualizacion?: string;
}
