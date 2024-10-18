import React from 'react';
import { useRouter } from "next/router";
import { tokenService } from "../src/services/auth/tokenService"
import { HttpClient } from '../src/infra/HttpClient/HttpClient';

export default function LogoutPage() {
  const router = useRouter();

  React.useEffect(async () => {
    try {
      await HttpClient('/api/refresh', {
        method: 'DELETE'
      });
      tokenService.delete();
      router.push('/');
    } catch (error) {
      console.log('error: ', error.message)
    }
  }, [])

  return (
    <div>
      Você será redirecionado em instantes...
    </div>
  )
}