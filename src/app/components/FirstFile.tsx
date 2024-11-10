'use client'
import React from 'react'
import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { getQuotes } from '../services/quotes';
import QuoteModel from '../models/quoteModel';

function FirstFile() {
  const { data, error, isLoading }:UseQueryResult<QuoteModel[],Error>=useQuery({
    queryKey:['quotes'],
    queryFn: getQuotes,
  })

  if (isLoading) return <p> Loading quotes...</p>;
  if (error  instanceof Error) return <p>Error: {error.message}</p>;
  if(!data)
    return <div>No quotes available</div>
    console.log(data);
    
  return (
    <div>
      {data.map((quote: any) => (
        <div key={quote.id}>
          <p>{quote.quote}</p>
          <p>- {quote.author}</p>
        </div>
      ))}
    </div>
  );
}

export default FirstFile;