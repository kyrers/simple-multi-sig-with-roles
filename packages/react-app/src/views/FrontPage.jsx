import React from "react";
import { List } from "antd";
import QR from "qrcode.react";
import { useLocalStorage } from "../hooks";
import { Address, Balance, TransactionListItem } from "../components";

const axios = require("axios");

export default function FrontPage({
  executeTransactionEvents,
  contractName,
  localProvider,
  readContracts,
  price,
  mainnetProvider,
  blockExplorer,
  role
}) {
  const [methodName, setMethodName] = useLocalStorage("addSigner");
  return (
    <div style={{ padding: 32, maxWidth: 750, margin: "auto" }}>
      <div style={{ paddingBottom: 32 }}>
        <div key={`role`} style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "left", fontSize: 24 }}>
          <b>Your Role :&nbsp;</b>
          {role}
        </div>

        <div>
          <Balance
            address={readContracts ? readContracts[contractName].address : readContracts}
            provider={localProvider}
            dollarMultiplier={price}
            fontSize={32}
          />
        </div>
        <div>
          <QR
            value={readContracts ? readContracts[contractName].address : ""}
            size={90}
            level="H"
            includeMargin
            renderAs="svg"
          />
        </div>
        <div>
          <Address
            address={readContracts ? readContracts[contractName].address : readContracts}
            ensProvider={mainnetProvider}
            blockExplorer={blockExplorer}
            fontSize={32}
          />
        </div>
      </div>
      <List
        bordered
        dataSource={executeTransactionEvents}
        renderItem={item => {

          return (
            <>
              <TransactionListItem item={item} mainnetProvider={mainnetProvider} blockExplorer={blockExplorer} price={price} readContracts={readContracts} contractName={contractName} />
            </>
          );
        }}
      />
    </div>
  );
}
