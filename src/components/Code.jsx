import React from 'react';
import { useState } from 'react';
import Editor from './Editor';
import Result from './Result';
import { Box, styled } from '@mui/material';
import { javascript } from "@codemirror/lang-javascript";
import { html } from "@codemirror/lang-html";
import { css } from "@codemirror/lang-css";
import { useCallback } from "react";

const Container = styled(Box)`
    background-color: #060606;
    display: flex;
    flex-direction: column;

    @media (min-width: 600px) {
        flex-direction: row;
        height: 50vh;
    }
`;

const Code = () => {
  const [htmlEdit, setHtmlEdit] = useState('');
  const [cssEdit, setCssEdit] = useState('');
  const [jsEdit, setJsEdit] = useState('');

  const onChangeHtml = useCallback((value) => {
    setHtmlEdit(value);
  }, []);

  const onChangeCss = useCallback((value) => {
    setCssEdit(value);
  }, []);

  const onChangeJavaScript = useCallback((value) => {
    setJsEdit(value);
  }, []);

  const srcCode = `
      <body>${htmlEdit}</body>
      <style>${cssEdit}</style>
      <script>${jsEdit}</script>
    `;

  return (
    <>
      <Container>
        <Editor
          language={'HTML'}
          icon={'/'}
          color={'red'}
          value={htmlEdit}
          extension={html}
          onChange={onChangeHtml}
        />
        <Editor
          language={'CSS'}
          icon={'*'}
          color={'#4CB9E7'}
          value={cssEdit}
          extension={css}
          onChange={onChangeCss}
        />
        <Editor
          language={'JavaScript'}
          icon={'()'}
          extension={javascript}
          color={'#FFC436'}
          value={jsEdit}
          onChange={onChangeJavaScript}
        />
      </Container>

      <Result srcCode={srcCode} />
    </>
  );
}

export default Code;
