import CreateTitle from '@/app/components/CreateTitle'
import FormButton from '@/app/components/FormButton'
import InputData from '@/app/components/InputData'
import React from 'react'

export default function ForgotPassword() {
  return (
    <div>
     <CreateTitle title="forgot password" color='border-b-blue-950' tc='text-blue-950 font-bold' />
        <form className="flex flex-col items-center space-y-4 m-auto w-3/4">
            <InputData type="email" placeholder="Enter your email" />
            <InputData type="password" placeholder="Enter your password" />
            <InputData type="password" placeholder="confirm your password" />
            <FormButton data="create new password"/>
        </form>
    </div>
  )
}
