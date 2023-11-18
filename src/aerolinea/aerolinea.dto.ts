import {IsDate, IsNotEmpty, IsString, IsUrl} from 'class-validator';
export class AerolineaDto {

 @IsString()
 @IsNotEmpty()
 readonly name: string;
 
 @IsString()
 @IsNotEmpty()
 readonly description: string;
 
 @IsDate()
 @IsNotEmpty()
 readonly fundationDate: Date;
 
 @IsUrl()
 @IsNotEmpty()
 readonly webPage: string;
}