import React, { useCallback, useEffect } from "react";

interface UsePasswordGeneratorProps {
  length: number;
  hasChar: boolean;
  hasNum: boolean;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
}

const generator = (length: number, hasNum: boolean, hasChar: boolean) => {
  // console.log("run password generator");
  let passkey = "";

  let str = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm";
  if (hasChar) {
    str += "!@#$%^&*()_+-={}[]|\\:|,.<>?~`\";'";
  }
  if (hasNum) str += "1234567890";
  for (let i = 1; i <= length + 1; i++) {
    const index = Math.floor(Math.random() * str.length);
    passkey += str[index];
  }
  return passkey;
};

export const usePasswordGenerator = ({
  hasChar,
  hasNum,
  setPassword,
  length,
}: UsePasswordGeneratorProps) => {
  const passwordGenerator = useCallback(() => {
    setPassword(generator(length, hasNum, hasChar));
  }, [length, hasChar, hasNum]);

  useEffect(() => {
    passwordGenerator();
  }, [passwordGenerator]);

  return { passwordGenerator };
};
