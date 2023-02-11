import { log } from "console";
import React, { useEffect } from "react";
import { useQueryHook } from "src/hooks/useQueryHook";
import styles from "./Nav.module.css";

export type NavProps = {};
const Nav = ({}: NavProps) => {
  const { data, isLoading, error } = useQueryHook();
  return (
    <div data-testid="Nav-wrapper" className={styles.Nav}>
      {isLoading && "Loading"}
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
    </div>
  );
};
export default Nav;
