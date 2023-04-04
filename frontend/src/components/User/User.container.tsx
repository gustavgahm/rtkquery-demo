import { User } from 'models';
import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Component from './User.component';
import { useUserQuery } from 'api/Users.api';

const Container: React.FC = () => {
  const { id } = useParams();

  const { data, isLoading } = useUserQuery(parseInt(id!));

  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    setUser(data ?? null);
  }, [data]);

  const handleFormChange = useCallback((key: keyof User, value: string) => {
    setUser((prev) => ({ ...prev, [key]: value } as User));
  }, []);

  const handleFormSubmit = useCallback(() => {}, [user]);

  const props = {
    user,
    isLoading,
    onFormSubmit: handleFormSubmit,
    onFormChange: handleFormChange,
  };

  return <Component {...props} />;
};

export default Container;
