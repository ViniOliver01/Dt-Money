import { Content, Overlay, CloseButton, TransactionTypeButton, TransactionType } from './NewTransactionModal.style';
import { X, ArrowCircleUp, ArrowCircleDown } from 'phosphor-react';
import * as Dialog from '@radix-ui/react-dialog';
import * as z from 'zod';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

const newTransactionFormSchema = z.object({
  description: z.string(),
  price: z.number(),
  category: z.string(),
  type: z.enum(['income','outcome']),
})

type NewTransactionFormInputs = z.infer<typeof newTransactionFormSchema>;

export function NewTransactionModal(){
  const {
    control,
    register, 
    handleSubmit, 
    formState: {isSubmitting}
  } = useForm<NewTransactionFormInputs>({
    resolver: zodResolver(newTransactionFormSchema),

  })

  async function handleCreateNewTrasaction(data: NewTransactionFormInputs){
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log(data);
  }

  return (
    <Dialog.Portal>
      <Overlay />

      <Content>

        <Dialog.Title>Nova Transação</Dialog.Title> 

        <CloseButton>
          <X />
        </CloseButton>
        
        <form onSubmit={handleSubmit(handleCreateNewTrasaction)}>
          <input 
          type="text" 
          placeholder='Descrição' 
          required
          {...register('description')}
          />

          <input 
          type="number" 
          placeholder='Preço' 
          required
          {...register('price', {valueAsNumber: true})}
          />

          <input 
          type="text" 
          placeholder='Categoria' 
          required
          {...register('category')}
          />


          <Controller 
            control={control}
            name="type"
            render={({field})=> {
              return (
                <TransactionType 
                  onValueChange={field.onChange} 
                  value={field.value}
                >
                  <TransactionTypeButton variant='income' value='income'>
                    <ArrowCircleUp />
                    Entrada
                  </TransactionTypeButton>

                  <TransactionTypeButton variant='outcome' value='outcome'>
                    <ArrowCircleDown />
                    Saida
                  </TransactionTypeButton>
                </TransactionType>
              )
            }}
          />


          <button type="submit" disabled={isSubmitting}>Cadastrar</button>
        </form>


        

      </Content>

        
    </Dialog.Portal>
  );
}