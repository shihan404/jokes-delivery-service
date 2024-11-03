import { IsNotEmpty, IsString } from 'class-validator';

export class CreateJokeDto {
    @IsNotEmpty()
    @IsString()
    content: string;

    @IsNotEmpty()
    @IsString()
    type: string;
}