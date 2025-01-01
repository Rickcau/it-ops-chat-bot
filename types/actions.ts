export interface ActionParameter {
  name: string;
  label: string;
  placeholder: string;
  required: boolean;
}

export interface ActionDefinition {
  id: string;
  label: string;
  value: string;
  className: string;
  requiresParameters: boolean;
  parameters?: ActionParameter[];
  promptTemplate: string;
}

export interface ActionFormData {
  vmName?: string;
  resourceGroup?: string;
}

export const actionDefinitions: ActionDefinition[] = [
  {
    id: 'start-vm',
    label: 'Start VM',
    value: 'start',
    className: 'bg-green-500 hover:bg-green-600 dark:bg-green-600 dark:hover:bg-green-700 text-white',
    requiresParameters: true,
    parameters: [
      {
        name: 'vmName',
        label: 'VM Name',
        placeholder: 'Enter VM name',
        required: true
      },
      {
        name: 'resourceGroup',
        label: 'Resource Group',
        placeholder: 'Enter resource group',
        required: true
      }
    ],
    promptTemplate: 'Can you start VM {vmName} in resource group {resourceGroup}?'
  },
  {
    id: 'stop-vm',
    label: 'Stop VM',
    value: 'shutdown',
    className: 'bg-red-500 hover:bg-red-600 dark:bg-red-600 dark:hover:bg-red-700 text-white',
    requiresParameters: true,
    parameters: [
      {
        name: 'vmName',
        label: 'VM Name',
        placeholder: 'Enter VM name',
        required: true
      },
      {
        name: 'resourceGroup',
        label: 'Resource Group',
        placeholder: 'Enter resource group',
        required: true
      }
    ],
    promptTemplate: 'Can you stop VM {vmName} in resource group {resourceGroup}?'
  },
  {
    id: 'list-vms',
    label: 'List VMs',
    value: 'list',
    className: 'bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 text-white',
    requiresParameters: false,
    promptTemplate: 'Can you list all VMs?'
  },
  {
    id: 'restart-vm',
    label: 'Restart VM',
    value: 'restart',
    className: 'bg-orange-500 hover:bg-orange-600 dark:bg-orange-600 dark:hover:bg-orange-700 text-white',
    requiresParameters: true,
    parameters: [
      {
        name: 'vmName',
        label: 'VM Name',
        placeholder: 'Enter VM name',
        required: true
      },
      {
        name: 'resourceGroup',
        label: 'Resource Group',
        placeholder: 'Enter resource group',
        required: true
      }
    ],
    promptTemplate: 'Can you restart VM {vmName} in resource group {resourceGroup}?'
  }
] 