import { BadRequestException, Injectable } from '@nestjs/common';
import * as admin from 'firebase-admin';

const firebase:any = {
    "type": "service_account",
    "project_id": "vape-cart",
    "private_key_id": "ec6182c16cde765719d1932bc73628488f2a4d5f",
    "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEugIBADANBgkqhkiG9w0BAQEFAASCBKQwggSgAgEAAoIBAQCwD8Qr77MQzx8E\nco4doRDI685jr0545i2S6jEg/khU+FmgIUQe+AwiRdNmYHXKlmYdkIUuAoSJjJr9\n+cwoSvStm0CPjxLHd93oMPlVofMrYBkjB7hpDPQgoFUERs51ANOV2az1ECTqEcXM\nKSAEZv6UwRJFbS0/9oDRVXUdDQqw8UV65Wfp+9xdRW0p469lZZDu/b7cnPOHed8b\n7yaapf37lXDkjqdP2lL771/2w0q2c9Y3IhSBRSgNFMW5KbmnUh4b0+AZxbhp8sZR\nO9Fsfi7OooeAmYrP1BNzMo+eCO0hvieb4kva5BzCDnOl3yT28a3gL25yWppe9WMk\nm8r8mTrfAgMBAAECggEAFSDh6RHmz9rDUqclYJnj0puLKlGvSE6l4852CeBqMW7t\nC+H3c6351XfCuF5VaclQb4uDPV5w+wl5ejGAQMpKAGGJcbujmct2lnb2HRgxKfXq\nM6wpWHYFABCtqInkxzbLrYfbZpIYPqeBBhCzYRkzw7SYgDtrZZSBU13UOaHHNCz1\nNRilozsZn/cMZM/853PZHbJXbiT0A1p019wDTyktrXFTlHLP0bEgkbEkm2q8X1rw\nRPGFa/MDrz5N2cD78aqWNqUdL3bkzYRk3Qm+ZD4UdJvLR4SaU3wJN+ugeRgp+RbD\neQn85rhmJSkJ+nMaMJQtc+YJjtQcB0x5LNICK7+z0QKBgQDWiJtYMZ8as9dxFS12\nSBl7PZIdHhmAj7W77fmI/7N8HjPlrXqPRG7RJIjStSqi5Fw6sZk9oRQ8U0sVjhHo\nv8EvrqrNyG987TUPu2z3tjICDAq9RW1iyL6W4LuOsG2ct2z+55yoj93x34IWGc6S\ngflbD/0seoYpEswo47r5/saJ0QKBgQDSF4PRsdxiV7OvJe9BIm/z2xzmcl8/mBH9\nkvSutyhcbEZ0wfCtIPQYN53mD7laeTyqwN/fGdr9b3R4JH2i/7CpHrh8nMvBkwVB\nqZsSOCKFTmBDbRo/g9o3piV2yi61gHcKKvul+L6KUGdiV9t+rq4TdS0Var9Zc8TT\n+5WORDz1rwJ/TsXaRIfz49olQWCFUOkochgpjod+1bXvBRJcjfFV9j0g0TThy7lU\n93Zyxuu+vBEdzG9p1TdQNtZeu4tvCAdg6CE6llUCmtx+n0gyusIrmpTRXK4hfCQ5\n1yytsbcWiHTRkMd6vmoVFLr9CSBwuVsANG+qhqp2mJ5OWLVF8oWaYQKBgEef+rHX\n6GGissCotyvGmNJTRkQOhAiDSMbhfge+q8TuqQqPQAVWMcG73FodzDxbDuLMBMbj\n4rP6doOrNSYH8+uEbLMXJaQmAmnDb/nDJ4m5EbqLDKLQyemk/CrGfSwl0u+lfcu0\nxQkUplpxx4Ql+3TowukFTp0pidYXdIJfI0VDAoGAbdQJpSL0Qpc9V2oUEQnjsDqx\nxEZ6ryMSgqSimIKdnC68cOsTMIhd0swJpbbBaHV0O93yGf1i5TdM5W+3hdoU/zhY\n9Fz9ctBHqqQkLDA5+vejzxolNG/dU0sfo/jPBHMpZVW2XGjN2Hbyqk9n12nDjUh1\ntk2LeuPjt+yPQnqc9f0=\n-----END PRIVATE KEY-----\n",
    "client_email": "firebase-adminsdk-eob7j@vape-cart.iam.gserviceaccount.com",
    "client_id": "109319685422834323956",
    "auth_uri": "https://accounts.google.com/o/oauth2/auth",
    "token_uri": "https://oauth2.googleapis.com/token",
    "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
    "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-eob7j%40vape-cart.iam.gserviceaccount.com",
    "universe_domain": "googleapis.com"
  }

@Injectable()
export class FirebaseService {
  constructor() {
    admin.initializeApp({
      credential: admin.credential.cert(firebase),
    });
  }

  async deleteUser(uid: string): Promise<void> {
    try {
      await admin.auth().deleteUser(uid);
      console.log('Successfully deleted user');
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  }

  async resendVerificationEmail(email:string){
    try {
      await admin.auth().generateEmailVerificationLink(email)
      return {message:'Verification email sent.'}
    } catch (error) {
     throw new BadRequestException("Verification email not  sent. : " + error)
    }
  }


}
