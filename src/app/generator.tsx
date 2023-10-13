'use client';

import { useState } from 'react';

interface GeneratorProps {
  data: {
    letters: string[];
    themes: {
      [theme: string]: {
        [letter: string]: string[];
      };
    };
  };
}

export default function Generator({ data }: GeneratorProps) {
  const [generatedName, setGeneratedName] = useState('');
  const [selectedLetter, setSelectedLetter] = useState(data.letters[0]);
  const [selectedTheme, setSelectedTheme] = useState(Object.keys(data.themes)[0]);

  function generateName() {
    const resultArray = data.themes[selectedTheme][selectedLetter];
    const randomName = resultArray[Math.floor(Math.random() * resultArray.length)];

    // Ignore result if the generated name is the same as the currently displayed name
    if (randomName === generatedName) {
      generateName();
    } else {
      setGeneratedName(randomName);
    }
  }

  return (
    <>
      <div className="grid grid-cols-2 items-center gap-4 pt-8">
        <label className="justify-self-end">Starting Letter</label>
        <select
          className="rounded-md border-slate-600 bg-slate-800"
          value={selectedLetter}
          onChange={(e) => setSelectedLetter(e.target.value)}
        >
          {data.letters.map((letter) => {
            return (
              <option key={letter} value={letter}>
                {letter}
              </option>
            );
          })}
        </select>
        <label className="justify-self-end">Sprint Theme</label>
        <select
          className="rounded-md border-slate-600 bg-slate-800"
          value={selectedTheme}
          onChange={(e) => setSelectedTheme(e.target.value)}
        >
          {Object.keys(data.themes).map((theme) => {
            return (
              <option key={theme} value={theme}>
                {theme}
              </option>
            );
          })}
        </select>
      </div>
      <button className="mt-4 rounded-md border border-slate-600 bg-slate-800 px-4 py-2" onClick={() => generateName()}>
        {generatedName ? 'Regenerate Name' : 'Generate Name'}
      </button>
      {generatedName && (
        <div className="mt-8 flex h-[200px] w-[500px] items-center justify-center rounded-lg bg-slate-800">
          <div className="text-3xl">{generatedName}</div>
        </div>
      )}
    </>
  );
}
