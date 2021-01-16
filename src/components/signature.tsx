import React, { useEffect, useState } from 'react';

import { SignatureType } from '../types/signature';

interface SignatureProps {
  data: SignatureType;
}

const Signature: React.FC<SignatureProps> = ({ data }) => {
  const [content, setContent] = useState<string>(``);

  useEffect(() => {
    if (data) {
      setContent(
        document.getElementById(`${data.firstName}-${data.lastName}`)
          ?.innerHTML || ``
      );
    }
  }, [data]);

  const download = () => {
    const element = document.createElement('a');
    const file = new Blob([content], {
      type: 'text/html',
    });
    element.href = URL.createObjectURL(file);
    element.download = `${data.firstName}-${data.lastName}.htm`;
    document.body.appendChild(element);
    element.click();
  };

  const renderSubTitles = (titles: string[]) => (
    <>
      {titles.map((title, index) => (
        <tr key={index}>
          <td
            style={{
              fontSize: 12,
              fontWeight: `bold`,
              color: `#aaaaaa`,
              paddingBottom: index === titles.length - 1 ? 10 : 2,
            }}
          >
            {title}
          </td>
        </tr>
      ))}
    </>
  );

  return (
    <>
      <button onClick={download}>Download</button>
      <html lang="fr" id={`${data.firstName}-${data.lastName}`}>
        <head>
          <meta charSet="utf-8" />
          <title>Signature</title>
          <link
            href="https://fonts.googleapis.com/css?family=Montserrat:300,400,600&display=swap"
            rel="stylesheet"
          />
        </head>
        <body
          style={{
            fontFamily: `Montserrat, Helvetica, sans-serif`,
          }}
        >
          <table>
            <tr>
              <td>
                <table>
                  <tr>
                    <td>
                      <img
                        width="120"
                        height="120"
                        src="https://images.ctfassets.net/n7jonmrvv2j0/6yDT20VI2Kvy990txiaQBs/37b8154ed5b16bdb18cc9972e1721d4e/boule.png"
                        style={{ width: 120, height: 120 }}
                        alt="Logo"
                      />
                    </td>
                    <td style={{ paddingLeft: 10 }}>
                      <table>
                        <tr>
                          <td
                            style={{
                              fontWeight: `bold`,
                              color: `hsl(217, 71%, 40%)`,
                            }}
                          >
                            {data.firstName} {data.lastName.toUpperCase()}
                          </td>
                        </tr>
                        {renderSubTitles(data.title)}
                        <tr>
                          <td
                            style={{
                              fontSize: 12,
                              color: `#EB8329`,
                              fontWeight: `bold`,
                            }}
                          >
                            {data.phone
                              ? `M : ${data.phone}`
                              : `T : +32 10 65 07 76`}
                          </td>
                        </tr>
                        <tr>
                          <td>
                            {data.legal ? (
                              <a
                                href="https://www.legalplan.be"
                                style={{
                                  fontSize: 12,
                                  color: `#EB8329`,
                                  fontWeight: `bold`,
                                  textDecoration: `underline`,
                                }}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                www.legalplan.be
                              </a>
                            ) : (
                              <a
                                href="https://www.comptaplan.be"
                                style={{
                                  fontSize: 12,
                                  color: `#EB8329`,
                                  fontWeight: `bold`,
                                  textDecoration: `underline`,
                                }}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                www.comptaplan.be
                              </a>
                            )}
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td
                style={{
                  fontSize: 10,
                  color: `#27ae60`,
                  textTransform: `uppercase`,
                  fontWeight: `bold`,
                  paddingTop: 10,
                  borderTop: `1px solid #eeeeee`,
                }}
              >
                SAVE PAPER - THINK BEFORE YOU PRINT
              </td>
            </tr>
            <tr>
              <td
                style={{
                  color: `#aaaaaa`,
                  fontSize: 8,
                }}
              >
                AVERTISSEMENT: Ce courriel et tous les fichiers qui y sont
                attachés sont confidentiels et destinées exclusivement à l’usage
                de la personne à laquelle ils sont adressés. Les avis et
                informations qui y sont contenus sont donnés à titre de simples
                renseignements et sans engagement. Si vous recevez ce message
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                par erreur, merci de le détruire et d'en avertir immédiatement
                <a
                  href="mailto:info@comptaplan.be"
                  style={{
                    color: `hsl(217, 71%, 40%)`,
                  }}
                >
                  &nbsp;info@comptaplan.be
                </a>
                . Veuillez noter que, sauf autorisation expresse, toute
                divulgation, copie, distribution ou action se fondant sur le
                contenu de ce courriel est strictement interdite.
              </td>
            </tr>
          </table>
        </body>
      </html>
    </>
  );
};

export default Signature;
