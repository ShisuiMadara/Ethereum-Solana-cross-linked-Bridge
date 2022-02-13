// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import './TokenBase.sol';


contract TokenSol is TokenBase {
  constructor() TokenBase('Solana Token', 'STK') {}
}