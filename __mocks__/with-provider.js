/* eslint-disable react/prop-types */
import React from 'react';
import { RendererContext } from '@jakub007d/react-form-renderer';
import Form from '@jakub007d/react-form-renderer/form';

const RenderWithProvider = ({ value = { formOptions: {internalRegisterField: jest.fn(), internalUnRegisterField: jest.fn()} }, children, onSubmit = () => {} }) => {
  return (
    <Form onSubmit={onSubmit}>
      {() => (
        <RendererContext.Provider
          value={{
            ...value
          }}
        >
          {children}
        </RendererContext.Provider>
      )}
    </Form>
  );
};

export default RenderWithProvider;
