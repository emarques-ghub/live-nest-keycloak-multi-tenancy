import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
//import { JwtService } from '@nestjs/jwt';
//import * as bcrypt from 'bcrypt';
import { URLSearchParams } from 'url';
import { firstValueFrom } from 'rxjs';
import { resourceUsage } from 'process';

// const users = [
//   {
//     id: 1,
//     username: 'user1@user.com',
//     password: '$2b$10$EecWnvyBtN4ttSJWILAjs.lnOfVejB7ABCxWGLS0OUCEcbcnwTu5K', //123456
//     role: 'admin',
//   },
//   {
//     id: 2,
//     username: 'user2@user.com',
//     password: '$2b$10$EecWnvyBtN4ttSJWILAjs.lnOfVejB7ABCxWGLS0OUCEcbcnwTu5K',
//     role: 'user',
//   },
//   {
//     id: 3,
//     username: 'user3@user.com',
//     password: '$2b$10$EecWnvyBtN4ttSJWILAjs.lnOfVejB7ABCxWGLS0OUCEcbcnwTu5K',
//     role: 'user',
//   },
// ];


//bcrypt
@Injectable()
export class AuthService {

  //constructor(private jwtService: JwtService) {}
  constructor(private http: HttpService) {};

  async login(username: string, password: string) {
    const {data} = await firstValueFrom(
        this.http.post(
//        'http://localhost:8080/auth/realms/fullcycle/protocol/openid-connect/token', 
        'http://host.docker.internal:8080/auth/realms/fullcycle/protocol/openid-connect/token', 
        new URLSearchParams( {
          client_id: 'nest',
          client_secret: '8dc6cdda-a4d0-4f7c-a485-73377adbaec8',
          grant_type: 'password',
          username,
          password,
        }),
      ),
    );
    return data;
    // const user = this.validateCredentials(username, password);
    // const payload = {
    //   sub: user.id,
    //   username: user.username,
    //   role: user.role,
    // };
    // return this.jwtService.sign(payload);
  };

//   validateCredentials(username: string, password: string) {
//     const user = users.find(
//       (u) =>
//         u.username === username && bcrypt.compareSync(password, u.password),
//     );

//     if (!user) {
//       throw new Error('User not found');
//     }

//     return user;
//   }
 }
//auth0 - jsonwebtoken