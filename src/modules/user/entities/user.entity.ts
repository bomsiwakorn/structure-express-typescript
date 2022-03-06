import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
} from 'typeorm'

@Entity({ name: 'user' })
export class UserEntity {
  @PrimaryColumn({ unique: true, length: 45 })
  uuid: string

  @Column({ unique: true, length: 45 })
  email: string

  @Column({ length: 45 })
  password: string

  @CreateDateColumn()
  created_at?: Date

  @Column({ nullable: true })
  created_by?: Date
}
