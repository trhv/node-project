// import roles from '../../config/roles.json'

// export interface Role {
//     name: string;
//     permissions: string[];
// }

// export const getRoleByName = (name: string): Role => {
//     return roles.find((role: Role) => role.name === name);
// };

// export const getRoles = (): Role[] => {
//     return roles;
// }

// export const getPermissionsByRoleName = (roleName: string): string[] => {
//     const role = roles.roles.find((role: Role) => role.name === roleName);
//     return role ? role.permissions : [];
// }