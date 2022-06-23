import { Button, Flex, FormControl, FormLabel, Input, Stack, Text } from "@chakra-ui/react"
import { SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
  email: string,
  password: string,
  city: string,
  stack: string,
};

function App() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = data => console.log(data);

  return (
    <Flex align='center' justify='center' h='100vh' w='100vw' bg='black'>
      <Flex
        as='form'
        w='100%'
        maxWidth={450}
        direction='column'
        bg='blackAlpha'
        p='12'
        borderRadius={8}
        color='whatsapp.300'
        onSubmit={handleSubmit(onSubmit)}
      >
        <Text alignSelf='center' fontSize='2xl'>Registrar</Text>
        <Stack spacing='4'>
          <FormControl >
            <FormLabel htmlFor='email'>Email</FormLabel>
            <Input
              size='lg'
              id='email'
              bg='gray.900'
              type='email'
              focusBorderColor="whatsapp.400"
              {...register("email", { required: true })}
            />
          </FormControl>

          <FormControl>
            <FormLabel htmlFor='password'>Senha</FormLabel>
            <Input
              size='lg'
              id='password'
              bg='gray.900'
              type='password'
              focusBorderColor="whatsapp.400"
              {...register("password")}
            />
          </FormControl>

          <FormControl>
            <FormLabel htmlFor='city'>Cidade</FormLabel>
            <Input
              size='lg'
              id='city'
              bg='gray.900'
              focusBorderColor="whatsapp.400"
              {...register("city")}
            />
          </FormControl>

          <FormControl>
            <FormLabel htmlFor='stack'>Cargo</FormLabel>
            <Input
              size='lg'
              id='stack'
              bg='gray.900'
              focusBorderColor="whatsapp.400"
              {...register("stack")}
            />
          </FormControl>
        </Stack>
        <Button
          transition='all
          0.8s
          ease'
          _hover={{
            background:
              'whatsapp.700'
          }}
          type='submit'
          mt='8'
          size='lg'
          colorScheme='whatsapp'
        >Registrar</Button>
      </Flex>
      {errors.email?.type === 'required' && <Text color='white'>"Adicione o email"</Text>}
    </Flex>
  )
}

export default App
