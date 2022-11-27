import React from 'react';

const ContainerMain = ({ classNameProps, children }) => {
  return (
    <div
      className={`  container mx-auto ${
        classNameProps ? classNameProps : ' px-5 md:px-[45px]'
      }`}
    >
      {children}
    </div>
  );
};

const ContainerSecondary = ({ classNameProps, children }) => {
  return (
    <div className={`${classNameProps ? classNameProps : '  w-full'}`}>
      {children}
    </div>
  );
};

export { ContainerMain, ContainerSecondary };
