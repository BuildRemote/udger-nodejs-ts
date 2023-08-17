import { z } from 'zod'

export const UserAgentUdgerSchema = z.object({
    ua_string: z.string().optional(),
    ua_class: z.string().optional(),
    ua_class_code: z.string().optional(),
    ua: z.string().optional(),
    ua_version: z.string().optional(),
    ua_version_major: z.string().optional(),
    ua_uptodate_current_version: z.string().optional(),
    ua_family: z.string().optional(),
    ua_family_code: z.string().optional(),
    ua_family_homepage: z.string().optional(),
    ua_family_vendor: z.string().optional(),
    ua_family_vendor_code: z.string().optional(),
    ua_family_vendor_homepage: z.string().optional(),
    ua_family_icon: z.string().optional(),
    ua_family_icon_big: z.string().optional(),
    ua_family_info_url: z.string().optional(),
    ua_engine: z.string().optional(),
    os: z.string().optional(),
    os_code: z.string().optional(),
    os_homepage: z.string().optional(),
    os_icon: z.string().optional(),
    os_icon_big: z.string().optional(),
    os_info_url: z.string().optional(),
    os_family: z.string().optional(),
    os_family_code: z.string().optional(),
    os_family_vendor: z.string().optional(),
    os_family_vendor_code: z.string().optional(),
    os_family_vendor_homepage: z.string().optional(),
    device_class: z.string().optional(),
    device_class_code: z.string().optional(),
    device_class_icon: z.string().optional(),
    device_class_icon_big: z.string().optional(),
    device_class_info_url: z.string().optional(),
    device_marketname: z.string().optional(),
    device_brand: z.string().optional(),
    device_brand_code: z.string().optional(),
    device_brand_homepage: z.string().optional(),
    device_brand_icon: z.string().optional(),
    device_brand_icon_big: z.string().optional(),
    device_brand_info_url: z.string().optional(),
    crawler_last_seen: z.string().optional(),
    crawler_category: z.string().optional(),
    crawler_category_code: z.string().optional(),
    crawler_respect_robotstxt: z.string().optional()
});

export const UserAgentJsonSchema = z.object({
    uaString: z.string().optional(),
    uaClass: z.string().optional(),
    uaClassCode: z.string().optional(),
    ua: z.string().optional(),
    uaVersion: z.string().optional(),
    uaVersionMajor: z.string().optional(),
    uaUptodateCurrentVersion: z.string().optional(),
    uaFamily: z.string().optional(),
    uaFamilyCode: z.string().optional(),
    uaFamilyHomepage: z.string().optional(),
    uaFamilyVendor: z.string().optional(),
    uaFamilyVendorCode: z.string().optional(),
    uaFamilyVendorHomepage: z.string().optional(),
    uaFamilyIcon: z.string().optional(),
    uaFamilyIconBig: z.string().optional(),
    uaFamilyInfoUrl: z.string().optional(),
    uaEngine: z.string().optional(),
    os: z.string().optional(),
    osCode: z.string().optional(),
    osHomepage: z.string().optional(),
    osIcon: z.string().optional(),
    osIconBig: z.string().optional(),
    osInfoUrl: z.string().optional(),
    osFamily: z.string().optional(),
    osFamilyCode: z.string().optional(),
    osFamilyVendor: z.string().optional(),
    osFamilyVendorCode: z.string().optional(),
    osFamilyVendorHomepage: z.string().optional(),
    deviceClass: z.string().optional(),
    deviceClassCode: z.string().optional(),
    deviceClassIcon: z.string().optional(),
    deviceClassIconBig: z.string().optional(),
    deviceClassInfoUrl: z.string().optional(),
    deviceMarketname: z.string().optional(),
    deviceBrand: z.string().optional(),
    deviceBrandCode: z.string().optional(),
    deviceBrandHomepage: z.string().optional(),
    deviceBrandIcon: z.string().optional(),
    deviceBrandIconBig: z.string().optional(),
    deviceBrandInfoUrl: z.string().optional(),
    crawlerLastSeen: z.string().optional(),
    crawlerCategory: z.string().optional(),
    crawlerCategoryCode: z.string().optional(),
    crawlerRespectRobotstxt: z.string().optional()
});


export const IpAddressUdgerSchema = z.object({
    ip: z.string().optional(),
    ip_ver: z.number().or(z.string()).optional(),
    ip_classification: z.string().optional(),
    ip_classification_code: z.string().optional(),
    ip_hostname: z.string().optional(),
    ip_last_seen: z.string().optional(),
    ip_country: z.string().optional(),
    ip_country_code: z.string().optional(),
    ip_city: z.string().optional(),
    crawler_name: z.string().optional(),
    crawler_ver: z.string().optional(),
    crawler_ver_major: z.string().optional(),
    crawler_family: z.string().optional(),
    crawler_family_code: z.string().optional(),
    crawler_family_homepage: z.string().optional(),
    crawler_family_vendor: z.string().optional(),
    crawler_family_vendor_code: z.string().optional(),
    crawler_family_vendor_homepage: z.string().optional(),
    crawler_family_icon: z.string().optional(),
    crawler_family_info_url: z.string().optional(),
    crawler_last_seen: z.string().optional(),
    crawler_category: z.string().optional(),
    crawler_category_code: z.string().optional(),
    crawler_respect_robotstxt: z.string().optional(),
    datacenter_name: z.string().optional(),
    datacenter_name_code: z.string().optional(),
    datacenter_homepage: z.string().optional()
});

export const IpAddressJsonCompactSchema = z.object({
    ip: z.string().optional(),
    classification: z.string().optional(),
    lastSeen: z.string().optional(),
    hostname: z.string().optional(),
    geo: z.object({
        country: z.object({
            name: z.string().optional(),
            code: z.string().optional()
        }).optional(),
        city: z.string().optional()
    }).optional(),
    crawler: z.object({
        name: z.string().optional(),
        family: z.string().optional(),
        category: z.string().optional(),
        lastSeen: z.string().optional()
    }).optional(),
    datacenter: z.string().optional()
});

export const IpAddressJsonFullSchema = z.object({
    ip: z.string(),
    version: z.number().optional(),
    classification: z.object({
        name: z.string().optional(),
        code: z.string().optional()
    }).optional(),
    lastSeen: z.string().optional(),
    hostname: z.string().optional(),
    geo: z.object({
        country: z.object({
            name: z.string().optional(),
            code: z.string().optional()
        }).optional(),
        city: z.string().optional()
    }).optional(),
    crawler: z.object({
        name: z.string().optional(),
        version: z.object({
            current: z.string().optional(),
            major: z.string().optional()
        }).optional(),
        family: z.object({
            name: z.string().optional(),
            code: z.string().optional(),
            homepage: z.string().optional(),
            vendor: z.object({
                name: z.string().optional(),
                code: z.string().optional(),
                homepage: z.string().optional()
            }).optional(),
            icon: z.string().optional(),
            infoUrl: z.string().optional()
        }).optional(),
        lastSeen: z.string().optional(),
        category: z.object({
            name: z.string().optional(),
            code: z.string().optional()
        }).optional(),
        respectRobotsTxt: z.string().optional()
    }).optional(),
    datacenter: z.object({
        name: z.string().optional(),
        code: z.string().optional(),
        homepage: z.string().optional()
    }).optional()
});

export const UdgerSchema = z.object({
    user_agent: UserAgentUdgerSchema,
    ip_address: IpAddressUdgerSchema,
    from_cache: z.boolean()
});

export const UserAgentJsonFullSchema = z.object({
    'ua': z.object({
        'string': z.string().optional(),
        'class': z.object({
            'name': z.string().optional(),
            'code': z.string().optional()
        }).optional(),
        'name': z.string().optional(),
        'version': z.object({
            'current': z.string().optional(),
            major: z.string().optional()
        }).optional(),

        'uptodateCurrentVersion': z.string().optional(),
        'family': z.object({
            'name': z.string().optional(),
            'code': z.string().optional(),
            'homepage': z.string().optional(),
            'vendor': z.object({
                'name': z.string().optional(),
                'code': z.string().optional(),
                'homepage': z.string().optional()
            }).optional(),
            'icon': z.string().optional(),
            'iconBig': z.string().optional(),
            'infoUrl': z.string().optional()
        }).optional(),
        'engine': z.string().optional()
    }).optional(),
    'crawler': z.object({
        'lastSeen': z.string(),
        'category': z.object({
            'name': z.string(),
            'code': z.string()
        }),
        'respectRobotsTxt': z.string()
    }).optional(),
    'os': z.object({
        'name': z.string().optional(),
        'code': z.string().optional(),
        'homepage': z.string().optional(),
        'icon': z.string().optional(),
        'iconBig': z.string().optional(),
        'infoUrl': z.string().optional(),
        'family': z.object({
            'name': z.string().optional(),
            'code': z.string().optional(),
            'vendor': z.object({
                'name': z.string().optional(),
                'code': z.string().optional(),
                'homepage': z.string().optional()
            }).optional()
        }).optional()
    }).optional(),
    'device': z.object({
        'class': z.object({
            'name': z.string().optional(),
            'code': z.string().optional(),
            'icon': z.string().optional(),
            'iconBig': z.string().optional(),
            'infoUrl': z.string().optional()
        }).optional()
    }).optional()
});

export const UserAgentJsonCompactSchema =  z.object({
'ua': z.object({
    'string': z.string().optional(),
    'class': z.string().optional(),
    'name': z.string().optional(),
    'family':
            z.string()
            .or(
                z.object({
                    code: z.string(),
                    homepage: z.string().optional(),
                    vendor: z.string()
                })
            )
        .optional(),
    'engine': z.string().optional()
}).optional(),

'crawler': z.object({
    lastSeen: z.string(),
    category: z.string()
}).optional(),


'os': z.object({
    code: z.string(),
    family: z.string(),
}).optional(),
'device': z.object({
    'class': z.string().optional()
}).optional()
})

export const JsonSchemaCompact = z.object({
    ipAddress: IpAddressJsonCompactSchema,
    userAgent: UserAgentJsonCompactSchema,
    fromCache: z.boolean()
})

export const JsonSchemaFull = z.object({
    ipAddress: IpAddressJsonFullSchema,
    userAgent: UserAgentJsonFullSchema,
    fromCache: z.boolean()
})

export const JsonSchema = JsonSchemaCompact.or(JsonSchemaFull)

export type UserAgentUdger = z.infer<typeof UserAgentUdgerSchema>
export type IpAddressUdger = z.infer<typeof IpAddressUdgerSchema>
export type Udger = z.infer<typeof UdgerSchema>
export type UdgerJsonCompact = z.infer<typeof JsonSchemaCompact>
export type UdgerJsonFull = z.infer<typeof JsonSchemaFull>
