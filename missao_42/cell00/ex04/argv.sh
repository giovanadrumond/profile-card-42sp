#!/bin/bash

if [ "$#" -eq 0 ]; then
        echo "Nenhum argumento passado"
        exit 1
fi      

echo "Argumentos passados"
count=1
for arg in "$@"; do
        echo "$count: $arg"
        count=$((count +1))
        if [ $count -gt 3 ]; then
                break
        fi      
done  
