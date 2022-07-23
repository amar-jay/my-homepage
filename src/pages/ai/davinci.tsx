import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Heading,
  Flex,
  Container,
  Input,
  Text,
  Button,
} from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";
import { useState } from "react";
import Paragraph from "../../components/layout/Paragraph";
import Section from "../../components/SectionMotion";

export default function FormikExample() {
  const [result, setResult] = useState<{ text: string }[]>();
  const onSubmit = async (value: string) => {
    const res = await fetch("/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ input: value }),
    }).catch((err) => {
      console.error(err);
    });
    // alert(res);
    const data = await res!.json();
    setResult(data.result);
  };
  function validateName(value: unknown) {
    let error;
    if (!value) {
      error = "Name is required";
    } else if (value == null) {
      error = "It's blank. Come on I DARE YOU to Ask me Anything 😏";
    }
    return error;
  }

  return (
    <Section delay="0.2">
      <Formik
        initialValues={{ name: "Suggest a book to Read" }}
        onSubmit={(values, actions) => {
          onSubmit(values.name).then(() => {
            actions.setSubmitting(false);
          });
        }}
      >
        {(props) => (
          <Form>
            <Field name="name" validate={validateName}>
              {({ field, form }: { [props: string]: any }) => (
                <FormControl isInvalid={form.errors.name && form.touched.name}>
                  <FormLabel htmlFor="name">Question to Me</FormLabel>
                  <Input {...field} id="name" placeholder="name" />
                  <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Button
              mt={4}
              colorScheme="teal"
              isLoading={props.isSubmitting}
              type="submit"
            >
              Submit
            </Button>
          </Form>
        )}
      </Formik>
      <Container>
        {result && (
          <Flex flexDir={"column"}>
            <Heading as={"h2"} variant={"section-title"}>
              Results
            </Heading>
            <Text fontSize={"2xl"}>{result.map((text) => text.text)}</Text>
          </Flex>
        )}
      </Container>
    </Section>
  );
}
