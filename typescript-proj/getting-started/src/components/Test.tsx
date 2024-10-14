import React from "react";

interface TestProps {
  id: String;
}
interface TestProps2 {
  fname: string;
  lname: string;
}
interface RequiredProps {
  a?: number;
  b?: string;
  c?:string;
}
type newProps= Pick<RequiredProps, 'c'>;

type NewProp = TestProps & TestProps2;

const Test: React.FC<NewProp> = ({ id, fname, lname }) => {
  const handleClick = () => {
    console.log(id);
    console.log(fname);
    console.log(lname);
  };
  const handleAwait = async () => {
    const sayHello = await new Promise<String>((resolve) => {
      setTimeout(() => {
        resolve("Hello");
      }, 1000);
    });
    const obj: RequiredProps = { b: "Gagan" };
    const objc: newProps={c:"idk"};

    console.log(sayHello, obj.b, objc.c);
  };

  return (
    <div style={{ marginTop: "20px" }}>
      <div>
        Test
        <button onClick={handleClick}>onClick!</button>
      </div>
      <div>
        Awaited Type & Pick <button onClick={handleAwait}> Await!</button>
      </div> 
      <div>
         Type <button onClick={handleAwait}> Await!</button>
      </div>
    </div>
  );
};

export default Test;
