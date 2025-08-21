import CreateTitle from '@/app/components/CreateTitle'
import FormButton from '@/app/components/FormButton'
import InputData from '@/app/components/InputData'
import Link from 'next/link'
import React from 'react'

export default function Login() {
  return (
    <div>
        <CreateTitle title="sign in details" color='border-b-blue-950' tc='text-blue-950 font-bold' />
        <form className="flex flex-col items-center space-y-4 m-auto w-3/4">
            <InputData type="email" placeholder="Enter your email" />
            <InputData type="password" placeholder="Enter your password" />
            <FormButton data="sign in"/>
            <Link href="/forgot-password" className='w-full flex justify-center'> <FormButton data="forgot password" /></Link>

        </form>
    </div>
  )
}
