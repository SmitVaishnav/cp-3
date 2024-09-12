/* eslint-disable no-unused-vars */

// ====== USER PARAMS
// CreateUserParams type definition was used to ensure these fields exist
// Example usage: 
// const createUser = (params) => { /* function implementation */ }
// where params is expected to have the fields: clerkId, email, username, firstName, lastName, photo

/**
 * @typedef {Object} CreateUserParams
 * @property {string} clerkId
 * @property {string} email
 * @property {string} username
 * @property {string} firstName
 * @property {string} lastName
 * @property {string} photo
 */

/**
 * @typedef {Object} UpdateUserParams
 * @property {string} firstName
 * @property {string} lastName
 * @property {string} username
 * @property {string} photo
 */

// ====== IMAGE PARAMS

/**
 * @typedef {Object} AddImageParams
 * @property {Object} image
 * @property {string} image.title
 * @property {string} image.publicId
 * @property {string} image.transformationType
 * @property {number} image.width
 * @property {number} image.height
 * @property {any} image.config
 * @property {string} image.secureURL
 * @property {string} image.transformationURL
 * @property {string|undefined} image.aspectRatio
 * @property {string|undefined} image.prompt
 * @property {string|undefined} image.color
 * @property {string} userId
 * @property {string} path
 */

/**
 * @typedef {Object} UpdateImageParams
 * @property {Object} image
 * @property {string} image._id
 * @property {string} image.title
 * @property {string} image.publicId
 * @property {string} image.transformationType
 * @property {number} image.width
 * @property {number} image.height
 * @property {any} image.config
 * @property {string} image.secureURL
 * @property {string} image.transformationURL
 * @property {string|undefined} image.aspectRatio
 * @property {string|undefined} image.prompt
 * @property {string|undefined} image.color
 * @property {string} userId
 * @property {string} path
 */

/**
 * @typedef {Object} Transformations
 * @property {boolean|undefined} restore
 * @property {boolean|undefined} fillBackground
 * @property {Object|undefined} remove
 * @property {string|undefined} remove.prompt
 * @property {boolean|undefined} remove.removeShadow
 * @property {boolean|undefined} remove.multiple
 * @property {Object|undefined} recolor
 * @property {string|undefined} recolor.prompt
 * @property {string} recolor.to
 * @property {boolean|undefined} recolor.multiple
 * @property {boolean|undefined} removeBackground
 */

// ====== TRANSACTION PARAMS

/**
 * @typedef {Object} CheckoutTransactionParams
 * @property {string} plan
 * @property {number} credits
 * @property {number} amount
 * @property {string} buyerId
 */

/**
 * @typedef {Object} CreateTransactionParams
 * @property {string} stripeId
 * @property {number} amount
 * @property {number} credits
 * @property {string} plan
 * @property {string} buyerId
 * @property {Date} createdAt
 */

/** 
 * @typedef {"restore" | "fill" | "remove" | "recolor" | "removeBackground"} TransformationTypeKey
 */

// ====== URL QUERY PARAMS

/**
 * @typedef {Object} FormUrlQueryParams
 * @property {string} searchParams
 * @property {string} key
 * @property {string|number|null} value
 */

/**
 * @typedef {Object} UrlQueryParams
 * @property {string} params
 * @property {string} key
 * @property {string|null} value
 */

/**
 * @typedef {Object} RemoveUrlQueryParams
 * @property {string} searchParams
 * @property {string[]} keysToRemove
 */

/**
 * @typedef {Object} SearchParamProps
 * @property {Object} params
 * @property {string} params.id
 * @property {TransformationTypeKey} params.type
 * @property {Object<string, string|string[]>} searchParams
 */

/**
 * @typedef {Object} TransformationFormProps
 * @property {"Add" | "Update"} action
 * @property {string} userId
 * @property {TransformationTypeKey} type
 * @property {number} creditBalance
 * @property {IImage|null} [data]
 * @property {Transformations|null} [config]
 */

/**
 * @typedef {Object} TransformedImageProps
 * @property {any} image
 * @property {string} type
 * @property {string} title
 * @property {Transformations|null} transformationConfig
 * @property {boolean} isTransforming
 * @property {boolean|undefined} [hasDownload]
 * @property {React.Dispatch<React.SetStateAction<boolean>>|undefined} [setIsTransforming]
 */
