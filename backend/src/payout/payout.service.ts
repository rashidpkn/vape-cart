import { BadRequestException, Injectable } from '@nestjs/common';
import { CreatePayoutDto } from './dto/create-payout.dto';
import { UpdatePayoutDto } from './dto/update-payout.dto';
import { Payout } from 'src/model/payout.model';

@Injectable()
export class PayoutService {
  async create(createPayoutDto: CreatePayoutDto) {
    try {
      const {
        fName,
        email,
        phone,
        method,
        amount,
        account,
        currency,
        network,
        walletAddress,
      } = createPayoutDto;
      if (!fName || !email || !phone || !method || !amount) {
        throw new BadRequestException(
          'fName,email,phone,method and amount are mandatory',
        );
      }
      if (method === 'crypto') {
        if (!currency) {
          throw new BadRequestException('Currency is mandatory');
        }
        if (currency === 'usdt' && !network) {
          throw new BadRequestException('Payment network is mandatory');
        }
      } else if (!account) {
        throw new BadRequestException('Account details is mandatory');
      }
      if (method === 'crypto' && !walletAddress) {
        throw new BadRequestException('walletAddress is mandatory');
      }
      await Payout.create({
        fName,
        email,
        phone,
        method,
        amount,
        account,
        currency,
        network,
        walletAddress,
      });
      return { message: 'Payout Request successfull' };
    } catch (error) {
      throw error;
    }
  }

  async findAll(query: { fName: string }) {
    try {
      const where: { fName?: string } = {};
      if (query.fName) {
        where.fName = query.fName;
      }
      return await Payout.findAll({ where });
    } catch (error) {}
  }

  async findOne(id: number) {
    try {
      if (isNaN(id)) {
        throw new BadRequestException('Enter valid id');
      }
      return await Payout.findByPk(id);
    } catch (error) {
      throw error;
    }
  }

  async update(id: number, updatePayoutDto: UpdatePayoutDto) {
    try {
      if (isNaN(id)) {
        throw new BadRequestException('Enter valid id');
      }
      await Payout.update(updatePayoutDto, { where: { id } });
      return { message: 'updated' };
    } catch (error) {
      throw error;
    }
  }

  async remove(id: number) {
    try {
      if (isNaN(id)) {
        throw new BadRequestException('Enter valid id');
      }
      await Payout.destroy({ where: { id } });
      return { message: 'Payout is deleted' };
    } catch (error) {
      throw error;
    }
  }
}
