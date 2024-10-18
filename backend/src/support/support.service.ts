import { Injectable, NotFoundException, InternalServerErrorException, Logger } from '@nestjs/common';
import { CreateSupportDto } from './dto/create-support.dto';
import { UpdateSupportDto } from './dto/update-support.dto';
import { Support } from 'src/model/support.model';
import { Transaction } from 'sequelize';

@Injectable()
export class SupportService {
  

  async create(createSupportDto: CreateSupportDto) {
    try {
      const support = await Support.create({ ...createSupportDto });
      return support;
    } catch (error) {
      throw new InternalServerErrorException('Failed to create support ticket');
    }
  }

  async findAll() {
    try {
      return await Support.findAll();
    } catch (error) {
      throw new InternalServerErrorException('Failed to fetch support tickets');
    }
  }

  async findOne(id: number) {
    try {
      const support = await Support.findByPk(id);
      if (!support) {
        throw new NotFoundException(`Support ticket with ID ${id} not found`);
      }
      return support;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      throw new InternalServerErrorException('Failed to fetch support ticket');
    }
  }

  async update(id: number, updateSupportDto: UpdateSupportDto) {
    const t: Transaction = await Support.sequelize.transaction();
    try {
      const support = await Support.findByPk(id, { transaction: t });
      if (!support) {
        await t.rollback();
        throw new NotFoundException(`Support ticket with ID ${id} not found`);
      }
      await support.update({ ...updateSupportDto }, { transaction: t });
      await t.commit();
      return support;
    } catch (error) {
      await t.rollback();
      if (error instanceof NotFoundException) {
        throw error;
      }
      throw new InternalServerErrorException('Failed to update support ticket');
    }
  }

  async remove(id: number) {
    try {
      const support = await Support.findByPk(id);
      if (!support) {
        throw new NotFoundException(`Support ticket with ID ${id} not found`);
      }
      await support.destroy();
      return { message: "Support ticket deleted successfully" };
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      throw new InternalServerErrorException('Failed to delete support ticket');
    }
  }
}