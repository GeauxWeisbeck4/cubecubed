[cubecubed](/reference/README.md) / [Exports](/reference/modules.md) / Translate

# Class: Translate

Translate a geometric cubicon by a specified vector.

## Hierarchy

- `Animation`

  ↳ **`Translate`**

## Constructors

### constructor

• **new Translate**(`params`)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `Object` | - |
| `params.cubicon` | `Geometry` | The target cubicon to play this animation. |
| `params.duration?` | `number` | Time to play this animation. (in milliseconds) |
| `params.ease?` | [`EASE_TYPE`](/reference/types/EASE_TYPE.md) | Custom easing function for smooth animation. |
| `params.vector` | [`Vector2`](/reference/classes/Vector2.md) | Translation vector. |

#### Overrides

Animation.constructor

#### Defined in

[src/svg/animations/Translate.ts:15](https://github.com/imaphatduc/cubecubed/blob/1d9e38f/src/svg/animations/Translate.ts#L15)

## Properties

### cubicon

• **cubicon**: `any`

The target cubicon of this animation.

#### Inherited from

Animation.cubicon

#### Defined in

[src/svg/animations/Animation.ts:48](https://github.com/imaphatduc/cubecubed/blob/1d9e38f/src/svg/animations/Animation.ts#L48)

___

### duration

• **duration**: `number`

Time to play this animation (in milliseconds).

#### Inherited from

Animation.duration

#### Defined in

[src/svg/animations/Animation.ts:53](https://github.com/imaphatduc/cubecubed/blob/1d9e38f/src/svg/animations/Animation.ts#L53)

___

### ease

• **ease**: [`EASE_TYPE`](/reference/types/EASE_TYPE.md)

The easing function to use.

#### Inherited from

Animation.ease

#### Defined in

[src/svg/animations/Animation.ts:58](https://github.com/imaphatduc/cubecubed/blob/1d9e38f/src/svg/animations/Animation.ts#L58)

___

### vector

• **vector**: [`Vector2`](/reference/classes/Vector2.md)

#### Defined in

[src/svg/animations/Translate.ts:13](https://github.com/imaphatduc/cubecubed/blob/1d9e38f/src/svg/animations/Translate.ts#L13)

## Methods

### play

▸ **play**(`sleepTime`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `sleepTime` | `number` |

#### Returns

`void`

#### Defined in

[src/svg/animations/Translate.ts:42](https://github.com/imaphatduc/cubecubed/blob/1d9e38f/src/svg/animations/Translate.ts#L42)
