// DATA //

const Arabia = {
    name: "Arabia",    
    infantry: {
        t1: {
            att:62,
            def:120,
            hp:120   
        },
        t2: {
            att:128,
            def:125,
            hp:125
        },
        t3: {
            att:163,
            def:158,
            hp:155
        },
        t4: {
            att:192,
            def:192,
            hp:187
        }
    },
    cavalry: {
        t1: {
            att:(62*1.05).toFixed(2),
            def:120,
            hp:120   
        },
        t2: {
            att:128*1.05.toFixed(2),
            def:125,
            hp:125
        },
        t3: {
            att:163*1.05.toFixed(2),
            def:158,
            hp:155
        },
        t4: {
            att:(192*1.05).toFixed(2),
            def:192,
            hp:197
        }
    },
    archers: {
        t1: {
            att:62,
            def:120,
            hp:120   
        },
        t2: {
            att:125,
            def:128,
            hp:128
        },
        t3: {
            att:158,
            def:155,
            hp:163
        },
        t4: {
            att:192,
            def:192,
            hp:187
        }
    },
    sieges: {
        t1: {
            att:62,
            def:120,
            hp:120   
        },
        t2: {
            att:125,
            def:128,
            hp:125
        },
        t3: {
            att:163,
            def:155,
            hp:155
        },
        t4: {
            att:192,
            def:192,
            hp:187
        }
    },
}
const Britain = {
    name: "Britain",
    infantry: {
        t1: {
            att:62,
            def:120,
            hp:120   
        },
        t2: {
            att:128,
            def:125,
            hp:125
        },
        t3: {
            att:163,
            def:158,
            hp:155
        },
        t4: {
            att:192,
            def:192,
            hp:187
        }
    },
    cavalry: {
        t1: {
            att:62,
            def:120,
            hp:120   
        },
        t2: {
            att:128,
            def:125,
            hp:125
        },
        t3: {
            att:163,
            def:158,
            hp:155
        },
        t4: {
            att:187,
            def:192,
            hp:192
        }
    },
    archers: {
        t1: {
            att:(62*1.05).toFixed(2),
            def:120,
            hp:120   
        },
        t2: {
            att:(125*1.05).toFixed(2),
            def:128,
            hp:128
        },
        t3: {
            att:(158*1.05).toFixed(2),
            def:155,
            hp:163
        },
        t4: {
            att:(202*1.05).toFixed(2),
            def:192,
            hp:187
        }
    },
    sieges: {
        t1: {
            att:62,
            def:120,
            hp:120   
        },
        t2: {
            att:125,
            def:128,
            hp:125
        },
        t3: {
            att:163,
            def:155,
            hp:155
        },
        t4: {
            att:192,
            def:192,
            hp:187
        }
    },
}
const Byzantium = {
    name: "Byzantium",
    infantry: {
        t1: {
            att:62,
            def:120,
            hp:120   
        },
        t2: {
            att:128,
            def:125,
            hp:125
        },
        t3: {
            att:163,
            def:158,
            hp:155
        },
        t4: {
            att:192,
            def:192,
            hp:187
        }
    },
    cavalry: {
        t1: {
            att:62,
            def:120,
            hp:(120*1.05).toFixed(2)   
        },
        t2: {
            att:128,
            def:125,
            hp:(125*1.05).toFixed(2) 
        },
        t3: {
            att:163,
            def:158,
            hp:(155*1.05).toFixed(2) 
        },
        t4: {
            att:187,
            def:202,
            hp:(192*1.05).toFixed(2)
        }
    },
    archers: {
        t1: {
            att:62,
            def:120,
            hp:120   
        },
        t2: {
            att:125,
            def:128,
            hp:128
        },
        t3: {
            att:158,
            def:155,
            hp:163
        },
        t4: {
            att:192,
            def:192,
            hp:187
        }
    },
    sieges: {
        t1: {
            att:62,
            def:120,
            hp:120   
        },
        t2: {
            att:125,
            def:128,
            hp:125
        },
        t3: {
            att:163,
            def:155,
            hp:155
        },
        t4: {
            att:192,
            def:192,
            hp:187
        }
    },
}
const China = {
    name: "China",
    infantry: {
        t1: {
            att:62,
            def:(120*1.03).toFixed(2),
            hp:120   
        },
        t2: {
            att:128,
            def:(125*1.03).toFixed(2),
            hp:125
        },
        t3: {
            att:163,
            def:(158*1.03).toFixed(2),
            hp:155
        },
        t4: {
            att:197,
            def:(197*1.03).toFixed(2),
            hp:187
        }
    },
    cavalry: {
        t1: {
            att:62,
            def:120,
            hp:120   
        },
        t2: {
            att:128,
            def:125,
            hp:125
        },
        t3: {
            att:163,
            def:158,
            hp:155
        },
        t4: {
            att:187,
            def:192,
            hp:192
        }
    },
    archers: {
        t1: {
            att:62,
            def:120,
            hp:120   
        },
        t2: {
            att:125,
            def:128,
            hp:128
        },
        t3: {
            att:158,
            def:155,
            hp:163
        },
        t4: {
            att:192,
            def:192,
            hp:187
        }
    },
    sieges: {
        t1: {
            att:62,
            def:120,
            hp:120   
        },
        t2: {
            att:125,
            def:128,
            hp:125
        },
        t3: {
            att:163,
            def:155,
            hp:155
        },
        t4: {
            att:192,
            def:192,
            hp:187
        }
    },
}
const France = {
    name: "France",
    infantry: {
        t1: {
            att:62,
            def:120,
            hp:(120*1.03).toFixed(2)   
        },
        t2: {
            att:128,
            def:125,
            hp:(125*1.03).toFixed(2)  
        },
        t3: {
            att:163,
            def:158,
            hp:(155*1.03).toFixed(2)  
        },
        t4: {
            att:192,
            def:192,
            hp:(197*1.03).toFixed(2)
        }
    },
    cavalry: {
        t1: {
            att:62,
            def:120,
            hp:120   
        },
        t2: {
            att:128,
            def:125,
            hp:125
        },
        t3: {
            att:163,
            def:158,
            hp:155
        },
        t4: {
            att:187,
            def:192,
            hp:192
        }
    },
    archers: {
        t1: {
            att:62,
            def:120,
            hp:120   
        },
        t2: {
            att:125,
            def:128,
            hp:128
        },
        t3: {
            att:158,
            def:155,
            hp:163
        },
        t4: {
            att:192,
            def:192,
            hp:187
        }
    },
    sieges: {
        t1: {
            att:62,
            def:120,
            hp:120   
        },
        t2: {
            att:125,
            def:128,
            hp:125
        },
        t3: {
            att:163,
            def:155,
            hp:155
        },
        t4: {
            att:192,
            def:192,
            hp:187
        }
    },
}
const Germany = {
    name: "Germany",
    infantry: {
        t1: {
            att:62,
            def:120,
            hp:120   
        },
        t2: {
            att:128,
            def:125,
            hp:125
        },
        t3: {
            att:163,
            def:158,
            hp:155
        },
        t4: {
            att:192,
            def:192,
            hp:187
        }
    },
    cavalry: {
        t1: {
            att:(62*1.05).toFixed(2),
            def:120,
            hp:120   
        },
        t2: {
            att:(128*1.05).toFixed(2),
            def:125,
            hp:125
        },
        t3: {
            att:(163*1.05).toFixed(2),
            def:158,
            hp:155
        },
        t4: {
            att:(187*1.05).toFixed(2),
            def:192,
            hp:192
        }
    },
    archers: {
        t1: {
            att:62,
            def:120,
            hp:120   
        },
        t2: {
            att:125,
            def:128,
            hp:128
        },
        t3: {
            att:158,
            def:155,
            hp:163
        },
        t4: {
            att:192,
            def:192,
            hp:187
        }
    },
    sieges: {
        t1: {
            att:62,
            def:120,
            hp:120   
        },
        t2: {
            att:125,
            def:128,
            hp:125
        },
        t3: {
            att:163,
            def:155,
            hp:155
        },
        t4: {
            att:192,
            def:192,
            hp:187
        }
    },
}
const Japan = {
    name: "Japan",
    infantry: {
        t1: {
            att:(62*1.03).toFixed(2),
            def:120,
            hp:120   
        },
        t2: {
            att:(128*1.03).toFixed(2),
            def:125,
            hp:125
        },
        t3: {
            att:(163*1.03).toFixed(2),
            def:158,
            hp:155
        },
        t4: {
            att:(202*1.03).toFixed(2),
            def:192,
            hp:187
        }
    },
    cavalry: {
        t1: {
            att:62,
            def:120,
            hp:120   
        },
        t2: {
            att:128,
            def:125,
            hp:125
        },
        t3: {
            att:163,
            def:158,
            hp:155
        },
        t4: {
            att:187,
            def:192,
            hp:192
        }
    },
    archers: {
        t1: {
            att:62,
            def:120,
            hp:120   
        },
        t2: {
            att:125,
            def:128,
            hp:128
        },
        t3: {
            att:158,
            def:155,
            hp:163
        },
        t4: {
            att:192,
            def:192,
            hp:187
        }
    },
    sieges: {
        t1: {
            att:62,
            def:120,
            hp:120   
        },
        t2: {
            att:125,
            def:128,
            hp:125
        },
        t3: {
            att:163,
            def:155,
            hp:155
        },
        t4: {
            att:192,
            def:192,
            hp:187
        }
    },
}
const Korea = {
    name: "Korea",
    infantry: {
        t1: {
            att:62,
            def:120,
            hp:120   
        },
        t2: {
            att:128,
            def:125,
            hp:125
        },
        t3: {
            att:163,
            def:158,
            hp:155
        },
        t4: {
            att:192,
            def:192,
            hp:187
        }
    },
    cavalry: {
        t1: {
            att:62,
            def:120,
            hp:120   
        },
        t2: {
            att:128,
            def:125,
            hp:125
        },
        t3: {
            att:163,
            def:158,
            hp:155
        },
        t4: {
            att:187,
            def:192,
            hp:192
        }
    },
    archers: {
        t1: {
            att:62,
            def:(120*1.05).toFixed(2),
            hp:120   
        },
        t2: {
            att:125,
            def:(128*1.05).toFixed(2),
            hp:128
        },
        t3: {
            att:158,
            def:(155*1.05).toFixed(2),
            hp:163
        },
        t4: {
            att:192,
            def:(202*1.05).toFixed(2),
            hp:187
        }
    },
    sieges: {
        t1: {
            att:62,
            def:120,
            hp:120   
        },
        t2: {
            att:125,
            def:128,
            hp:125
        },
        t3: {
            att:163,
            def:155,
            hp:155
        },
        t4: {
            att:192,
            def:192,
            hp:187
        }
    },
}
const Ottoman = {
    name: "Ottoman",
    infantry: {
        t1: {
            att:62,
            def:120,
            hp:120   
        },
        t2: {
            att:128,
            def:125,
            hp:125
        },
        t3: {
            att:163,
            def:158,
            hp:155
        },
        t4: {
            att:192,
            def:192,
            hp:187
        }
    },
    cavalry: {
        t1: {
            att:62,
            def:120,
            hp:120   
        },
        t2: {
            att:128,
            def:125,
            hp:125
        },
        t3: {
            att:163,
            def:158,
            hp:155
        },
        t4: {
            att:187,
            def:192,
            hp:192
        }
    },
    archers: {
        t1: {
            att:62,
            def:120,
            hp:(120*1.05).toFixed(2)  
        },
        t2: {
            att:125,
            def:128,
            hp:(128*1.05).toFixed(2)  
        },
        t3: {
            att:158,
            def:155,
            hp:(163*1.05).toFixed(2)  
        },
        t4: {
            att:197,
            def:192,
            hp:(192*1.05).toFixed(2)
        }
    },
    sieges: {
        t1: {
            att:62,
            def:120,
            hp:120   
        },
        t2: {
            att:125,
            def:128,
            hp:125
        },
        t3: {
            att:163,
            def:155,
            hp:155
        },
        t4: {
            att:192,
            def:192,
            hp:187
        }
    },
}
const Rome = {
    name: "Rome",
    infantry: {
        t1: {
            att:62,
            def:(120*1.05).toFixed(2),
            hp:120   
        },
        t2: {
            att:128,
            def:(125*1.05).toFixed(2),
            hp:125
        },
        t3: {
            att:163,
            def:(158*1.05).toFixed(2),
            hp:155
        },
        t4: {
            att:192,
            def:(202*1.05).toFixed(2),
            hp:187
        }
    },
    cavalry: {
        t1: {
            att:62,
            def:120,
            hp:120   
        },
        t2: {
            att:128,
            def:125,
            hp:125
        },
        t3: {
            att:163,
            def:158,
            hp:155
        },
        t4: {
            att:187,
            def:192,
            hp:192
        }
    },
    archers: {
        t1: {
            att:62,
            def:120,
            hp:120   
        },
        t2: {
            att:125,
            def:128,
            hp:128
        },
        t3: {
            att:158,
            def:155,
            hp:163
        },
        t4: {
            att:192,
            def:192,
            hp:187
        }
    },
    sieges: {
        t1: {
            att:62,
            def:120,
            hp:120   
        },
        t2: {
            att:125,
            def:128,
            hp:125
        },
        t3: {
            att:163,
            def:155,
            hp:155
        },
        t4: {
            att:192,
            def:192,
            hp:187
        }
    },
}
const Spain = {
    name: "Spain",
    infantry: {
        t1: {
            att:62,
            def:120,
            hp:120   
        },
        t2: {
            att:128,
            def:125,
            hp:125
        },
        t3: {
            att:163,
            def:158,
            hp:155
        },
        t4: {
            att:192,
            def:192,
            hp:187
        }
    },
    cavalry: {
        t1: {
            att:62,
            def:(120*1.05).toFixed(2),
            hp:120   
        },
        t2: {
            att:128,
            def:(125*1.05).toFixed(2),
            hp:125
        },
        t3: {
            att:163,
            def:(158*1.05).toFixed(2),
            hp:155
        },
        t4: {
            att:192,
            def:(192*1.05).toFixed(2),
            hp:192
        }
    },
    archers: {
        t1: {
            att:62,
            def:120,
            hp:120   
        },
        t2: {
            att:125,
            def:128,
            hp:128
        },
        t3: {
            att:158,
            def:155,
            hp:163
        },
        t4: {
            att:192,
            def:192,
            hp:187
        }
    },
    sieges: {
        t1: {
            att:62,
            def:120,
            hp:120   
        },
        t2: {
            att:125,
            def:128,
            hp:125
        },
        t3: {
            att:163,
            def:155,
            hp:155
        },
        t4: {
            att:192,
            def:192,
            hp:187
        }
    },
}

civsList = [
    "Arabia",
    "Britain",
    "Byzantium",
    "China",
    "France",
    "Germany",
    "Japan",
    "Korea",
    "Ottoman",
    "Rome",
    "Spain"
]