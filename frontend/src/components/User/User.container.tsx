import { User } from 'models';
import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Component from './User.component';

const Container: React.FC = () => {
  const { id } = useParams();

  const [user, setUser] = useState<User | null>(null);

  const isLoading = true;

  const handleFormChange = useCallback((key: keyof User, value: string) => {
    setUser((prev) => ({ ...prev, [key]: value } as User));
  }, []);

  const handleFormSubmit = useCallback(() => {}, []);


  const props = {
    user,
    isLoading,
    onFormSubmit: handleFormSubmit,
    onFormChange: handleFormChange,
  };

  return <Component {...props} />;
};

export default Container;
