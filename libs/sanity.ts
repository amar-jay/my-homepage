import {
    // createImageUrlBuilder,
    createClient,
    createCurrentUserHook,
    ClientConfig,
} from 'next-sanity'
import { Url } from 'url';

    

export const config = {
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    projectId: process.env.NEXT_SANITY_PROJECT_ID!, //still get a type:string|undefined
    apiVersion: 'v1',
    


    useCdn: process.env.NODE_ENV === "production",
} as ClientConfig;


// setting up sanity client server for fetching data

export const SanityClient = createClient(config);

// get url of inage
// export const urlOf = (source:string) => createImageUrlBuilder(config).image(source);


// export const useCurrentUser = createCurrentUserHook(config);