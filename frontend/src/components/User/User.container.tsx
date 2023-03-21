import { useSaveUserMutation, useUserQuery } from 'api/Users.api';
import { User } from 'models';
import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Component from './User.component';

const Container: React.FC = () => {
  const { id } = useParams();
  const { data, isFetching } = useUserQuery(parseInt(id!), { skip: !id });
  const [saveUser, { isLoading: isSaving }] = useSaveUserMutation();

  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    if (data) {
      setUser(data);
    }
  }, [data]);

  const isLoading = isFetching || !user || isSaving;

  const handleFormChange = useCallback((key: keyof User, value: string) => {
    setUser((prev) => ({ ...prev, [key]: value } as User));
  }, []);

  const handleFormSubmit = useCallback(() => saveUser(user!), [saveUser, user]);

  const props = {
    user,
    isLoading,
    onFormSubmit: handleFormSubmit,
    onFormChange: handleFormChange,
  };

  return <Component {...props} />;
};

export default Container;
