import { Encrypter } from '../../../data/protocols/encrypter'
import { AddAccount, AddAccountModel } from '../../../domain/usecases/add-account/add-account'
import { AccountModel } from '../../models/account'

export class DbAddAccount implements AddAccount {
  constructor (private readonly encrypter: Encrypter) {}
  async add (account: AddAccountModel): Promise<AccountModel> {
    await this.encrypter.encrypt(account.password)
    return new Promise(resolve => { resolve(null) })
  }
}
