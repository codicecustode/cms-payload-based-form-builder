import type { CollectionConfig } from 'payload'

export const Tenants: CollectionConfig = {
  slug: 'tenants',
  admin: { useAsTitle: 'name' },
  fields: [
    { type: 'text', name: 'name', label: 'Name', required: true },
    // Add more fields as needed (e.g., domain, description)
  ],
}
