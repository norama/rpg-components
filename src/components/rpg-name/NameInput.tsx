import { createForm, required, reset, toTrimmed } from '@modular-forms/solid'
import FormButtons from 'shared/ui/form/FormButtons'
import FormFrame from 'shared/ui/form/FormFrame'

type NameInputForm = {
  name: string
}
const NameInput = () => {
  // Create login form
  const [nameInputForm, { Form, Field }] = createForm<NameInputForm>({
    initialValues: { name: '' },
  })

  return (
    <Form onSubmit={(values) => alert(JSON.stringify(values, null, 4))}>
      <FormFrame>
        <Field
          name="name"
          transform={toTrimmed({ on: 'input' })}
          validate={[required('Povinné pole.')]}
        >
          {(field, props) => (
            <>
              <label for="name">
                <small>Název postavy</small>
              </label>
              <input
                {...props}
                value={field.value}
                id="name"
                type="text"
                placeholder="Název postavy"
                required
                aria-invalid={
                  nameInputForm.invalid ? true : nameInputForm.submitted ? false : undefined
                }
              />
              <div class="error">{field.error}</div>
            </>
          )}
        </Field>
        <FormButtons onReset={() => reset(nameInputForm)} />
      </FormFrame>
    </Form>
  )
}

export default NameInput
