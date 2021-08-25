import React from 'react';
import Input from '../components/Input';
import { UserInfoWrapper } from '../components/UserInfo/style';

const UpdateUser: React.FC = () =>{
    return(
        <UserInfoWrapper>
            <span>Name</span>
            <Input
          type="text"
          text="New Name"
          onChange={()=> console.log('teste')}

        />
            <span>Email</span>
            <Input
          type="email"
          text="New Email"
          onChange={()=> console.log('teste')}

        />
            <span>Password</span>
            <Input
          type="password"
          text="New Password"
          onChange={()=> console.log('teste')}

        />
            
        </UserInfoWrapper>
    )
};


export default UpdateUser;