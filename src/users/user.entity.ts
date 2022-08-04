import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class User {

  @ApiProperty({ example: 1, description: 'The id of the User' })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ example: 'David', description: 'The firstname of the User' })
  @Column()
  firstName: string;

  @ApiProperty({ example: 'Smith', description: 'The lastname of the User' })
  @Column()
  lastName: string;

  @Column({ default: true })
  isActive: boolean;
}
