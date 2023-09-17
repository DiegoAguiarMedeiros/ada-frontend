// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react';
import { UserType } from '../../types';

const _retrieveData = async (key: string) => {
  try {
    const data = await localStorage.getItem(key);
    return data;
  } catch (error) {
    console.log(error);
  }
}

const getUser = () => _retrieveData("UADA");

const getToken = () => _retrieveData("TKADA");

const setUser = (value: UserType) => {
  localStorage.setItem("UADA", JSON.stringify(value));
};

const setToken = (value: string) => {
  localStorage.setItem("TKADA", value);
};

const dropStorage = () => {
    localStorage.clear();
  };

export default {
  getUser,
  getToken,
  setUser,
  setToken,
  dropStorage
};