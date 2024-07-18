import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateNotificationDto } from './dto/create-notification.dto';
import { UpdateNotificationDto } from './dto/update-notification.dto';
import { Notifications } from 'src/model/notifications.model';

@Injectable()
export class NotificationsService {
  async create(createNotificationDto: CreateNotificationDto) {
    try {
      if (
        !createNotificationDto.userId ||
        !createNotificationDto.role ||
        !createNotificationDto.title ||
        !createNotificationDto.message ||
        !createNotificationDto.type
      ) {
        throw new BadRequestException(
          'User id, Role, Type, Title and Message are mandatory',
        );
      }
      const notification = await Notifications.create({
        ...createNotificationDto,
      });
      return {
        message: 'Notification is created',
        notification,
      };
    } catch (error) {
      throw error;
    }
  }

  async findAll(query: {
    userId: string;
    role: string;
    status: string;
    type: string;
  }) {
    try {
      const { userId, role, status, type } = query;

      let where: {
        userId?: string;
        role?: string;
        status?: string;
        type?: string;
      } = {};

      userId && (where.userId = userId);
      role && (where.role = role);
      status && (where.status = status);
      type && where.type === type;

      const notifications = await Notifications.findAll({ where,order:[['id','DESC']] });

      if (!notifications.length) {
        throw new BadRequestException('Notifications not found');
      }

      return notifications;
    } catch (error) {
      throw error;
    }
  }

  async findOne(id: number) {
    try {
      const notification = await Notifications.findOne({ where: { id } });
      if (!notification) {
        throw new BadRequestException('Notification not found');
      }

      return notification;
    } catch (error) {
      throw error;
    }
  }

  async update(id: number, updateNotificationDto: UpdateNotificationDto) {
    try {
      const found = await Notifications.findOne({ where: { id } });

      if (!found) {
        throw new BadRequestException('Notification not found');
      }

      const updateNotification = await Notifications.update(
        updateNotificationDto,
        { where: { id } },
      );
      return {
        message: 'Notification is updated',
      };
    } catch (error) {
      throw error;
    }
  }

  async remove(id: number) {
    try {
      const found = await Notifications.findOne({ where: { id } });

      if (!found) {
        throw new BadRequestException('Notification not found');
      }

      const deleteNotification = await Notifications.destroy({ where: { id } });

      return {
        message: 'Notification is deleted',
      };
    } catch (error) {
      throw error;
    }
  }
}
