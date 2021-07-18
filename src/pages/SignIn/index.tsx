import React, { useState } from "react";

import { Container, Logo, Form, FormHeader, FormBody } from './styles';
import logoImg from '../../assets/logo.svg';
import Input from "../../components/Input";
import Button from "../../components/Button";
import { useAuth } from "../../hooks/auth";


const SignIn: React.FC = () => {

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const { login } = useAuth();

    return (
        <Container>
            <Logo>
                <img src={logoImg} alt="My Wallet" />
                <h3>My Wallet</h3>
            </Logo>
            <Form onSubmit={(e) => {login(email, password); e.preventDefault();}}>
                <FormHeader>Login</FormHeader>
                <FormBody>
                    <Input type="email" name="email" placeholder="E-mail" onChange={(e) => setEmail(e.target.value)} required/>
                    <Input type="password" name="password" placeholder="Senha" onChange={(e) => setPassword(e.target.value)} required/>
                    <Button type="submit">Entrar</Button>
                </FormBody>
            </Form>
        </Container>
    )
}

export default SignIn;