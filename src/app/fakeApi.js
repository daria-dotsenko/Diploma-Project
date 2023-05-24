const types = [
    {
        name: "income",
        _id: "K1L2M3N4O5"
    },
    {
        name: "costs",
        _id: "U1V2W3X4Y5"
    }
];
const categories = [
    {
        name: "food",
        _id: "j8D3bT",
        type: "K1L2M3N4O5"
    },
    {
        name: "household",
        _id: "q2K9rS",
        type: "K1L2M3N4O5"
    },
    {
        name: "utilities",
        _id: "a1b2c3",
        type: "K1L2M3N4O5"
    },
    {
        name: "transport",
        _id: "d4e5f6",
        type: "K1L2M3N4O5"
    },
    {
        name: "health",
        _id: "g7h8i9",
        type: "K1L2M3N4O5"
    },
    {
        name: "entertainment",
        _id: "j0k1l2",
        type: "K1L2M3N4O5"
    },
    {
        name: "education",
        _id: "m3n4o5",
        type: "K1L2M3N4O5"
    },
    {
        name: "clothing",
        _id: "p6q7r8",
        type: "K1L2M3N4O5"
    },
    {
        name: "family",
        _id: "s9t0u1",
        type: "K1L2M3N4O5"
    },
    {
        name: "credits",
        _id: "v2w3x4",
        type: "K1L2M3N4O5"
    },
    {
        name: "other",
        _id: "y5z6a7",
        type: "K1L2M3N4O5"
    },
    {
        name: "salary",
        _id: "y5z6a7",
        type: "U1V2W3X4Y5"
    },
    {
        name: "bank_interest",
        _id: "c5d6e7",
        type: "U1V2W3X4Y5"
    },
    {
        name: "cashback",
        _id: "z2a3b4",
        type: "U1V2W3X4Y5"
    },
    {
        name: "other",
        _id: "w9x0y1",
        type: "U1V2W3X4Y5"
    }
];
const accountTypes = [
    {
        name: "card",
        _id: "D6E7F8G9H0"
    },
    {
        name: "cash",
        _id: "S1T2U3V4W5"
    }
];

const accounts = [
    {
        name: "main card",
        _id: "1",
        accountTypeId: "D6E7F8G9H0"
    },
    {
        name: "main cash",
        _id: "2",
        accountTypeId: "S1T2U3V4W5"
    }
];

export const operations = [
    {
        _id: "L4mN5oPq6rS7t8",
        userId: "L4WB6uGy6KYVHBRivoK89L4I8Qg2",
        amount: 1000,
        type: "U1V2W3X4Y5",
        categories: "m3n4o5",
        account: "1",
        comment: "",
        created_at: "1671573258520"
    },
    {
        _id: "L5mN5oPq6rS7t8",
        userId: "L4WB6uGy6KYVHBRivoK89L4I8Qg2",
        amount: 2000,
        type: "K1L2M3N4O5",
        categories: "y5z6a7",
        account: "1",
        comment: "Payroll",
        created_at: "1674571058520"
    },
    {
        _id: "L6mN5oPq6rS7t8",
        userId: "L4WB6uGy6KYVHBRivoK89L4I8Qg2",
        amount: 3000,
        type: "U1V2W3X4Y5",
        categories: "j8D3bT",
        account: "1",
        comment: "",
        created_at: "1677579058520"
    },
    {
        _id: "L7mN5oPq6rS7t8",
        userId: "L4WB6uGy6KYVHBRivoK89L4I8Qg2",
        amount: 4000,
        type: "K1L2M3N4O5",
        categories: "y5z6a7",
        account: "1",
        comment: "",
        created_at: "1676573058520"
    },
    {
        _id: "L8mN5oPq6rS7t8",
        userId: "L4WB6uGy6KYVHBRivoK89L4I8Qg2",
        amount: 5000,
        type: "K1L2M3N4O5",
        categories: "y5z6a7",
        account: "1",
        comment: "",
        created_at: "1679573058520"
    }
]