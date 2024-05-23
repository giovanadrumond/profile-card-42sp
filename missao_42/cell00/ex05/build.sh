#!/bin/bash

if [ $# -eq 0 ]; then
   echo "Sem argumentos"
else
   for arg in "$@"; do
       mkdir "ex${arg}"
   done
fi
