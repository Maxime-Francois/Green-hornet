'use client'

import axios from 'axios';
import { AiFillGithub } from 'react-icons/ai';
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import { useCallback, useState } from 'react';
import {
    FieldValues,
    SubmitHandler,
    useForm
} from 'react-hook-form';
import useRegisterModal from '@/app/hooks/useRegisterModal';
import useLoginModal from '@/app/hooks/useLogin';
import Modal from './Modal';
import Heading from '../Heading';
import Input from '../inputs/Input';
import toast from 'react-hot-toast';
import Button from '../Button';
import { signIn } from 'next-auth/react';


const RegisterModal = () => {
    const RegisterModal = useRegisterModal();
     const LoginModal = useLoginModal()
    const [isLoading, setIsLoading] =  useState(false);

    const {
        register,
        handleSubmit,
        formState: {
            errors,
        }
    } = useForm<FieldValues>({
        defaultValues: {
            name: '',
            email:'',
            password:'',
        }
    });

    const onSubmit : SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true);

        axios.post('api/register', data)
        .then(() => {
            RegisterModal.onClose();
        })
        .catch((error) => {
            toast.error('something went wrong')
        })
        .finally(() => {
            setIsLoading(false);
        })
    }

    const bodyContent = (
        <div className='flex flex-col gap-4'>
            <Heading
            title="Bienvenue sur Green hornet cbd"
            subtitle='créez votre compte!'
            
            />
            <Input
            id="email"
            label="Email"
            disabled={isLoading}
            register={register}
            errors={errors}
            required
            />
              <Input
            id="name"
            label="Pseudo"
            disabled={isLoading}
            register={register}
            errors={errors}
            required
            />
              <Input
            id="password"
            type='password'
            label="Mot de passe"
            disabled={isLoading}
            register={register}
            errors={errors}
            required
            />
        </div>
    );

    const footerContent = (
        <div className='flex flex-col gap-4 mt-3'>
            <hr />
            <Button 
            outline
            label= "Connexion avec Google"
            icon={FcGoogle}
            onClick={() => signIn('google')}
            />
            {/* <Button 
            outline
            label= "Connexion avec Facebook "
            icon={BsFacebook}
            onClick={() => signIn('facebook')}
            /> */}
            <div className='
            text-neutral-500
            text-center
            mt-4
            font-light
            '>
                <div className='justify-center flex flex-row items-center gap-2'>
                    <div>
                        Vous avez déja un compte ? 
                    </div>
                     <div
                      onClick={LoginModal.onOpen}
                     className='
                     text-neutral-800
                     cursor-pointer
                     hover:underline
                     '>
                       Connexion
                    </div>
                </div>
            </div>
        </div>
    )

  return (
    <Modal
    disabled={isLoading}
    isOpen={RegisterModal.isOpen}
    title= "Créer votre compte"
    actionLabel="Créer votre compte"
    onClose={RegisterModal.onClose}
    onSubmit={handleSubmit(onSubmit)}
    body={bodyContent}
    footer={footerContent}

    />
  )
}

export default RegisterModal