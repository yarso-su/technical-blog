---
metaTitle: "¿Cómo Instalar Arch Linux? (Sin Morir en el Intento)"
title: "¿Cómo Instalar Arch Linux?"
description: 'Si llegaste a este post probablemente sabes lo que estás haciendo... o tal vez no, pero eso no es importante.'
complement: 'Lo que sí es importante es que estás a punto de embarcarte en una aventura épica que te convertirá en el tipo de persona que responde "I use Arch, by the way" en cada conversación sobre tecnología.'
img: "archlinux.jpg"
published: 2025-09-22
modified: 2025-12-06
minutesToRead: 11
---

Arch Linux, ¿sobran explicaciones, no? Pero por si las dudas hagamos un resumen de lo que es y por qué podría ser una elección interesante (o masoquista, tú decides) para tu nuevo OS.

---

## Arch Linux: El Sistema del "Hazlo Tú Mismo"

Arch Linux es una distribución de [GNU Linux](/que-es-linux/) que busca ser pragmática, simple y minimalista. Es el sistema operativo que resulta de la filosofía "Hazlo tú mismo", pero aplicada al software.

Es como comprar muebles de IKEA, pero en versión hardcore: te dan las piezas, las herramientas, un manual en sueco, y te desean suerte.

### ¿Qué Puedes Esperar?

Bueno, **nada** y **todo** al mismo tiempo. 

**Nada** viene hecho de fábrica. Una vez finalices la instalación de Arch Linux solo tendrás:
- Una terminal (tty) más negra que el alma de tu ex
- Algunas utilidades básicas como `ls`, `cd`, `vim`, `nano`, y poco más
- La satisfacción de haber llegado tan lejos

Pero puedes hacer absolutamente **TODO**:
- Sistema de notificaciones personalizado
- Barra de estado que haga que tus amigos digan "¿cómo hiciste eso?"
- Gestor de ventanas que sea exactamente como tú quieres
- Entorno de escritorio completamente a tu medida
- Un setup que hará que r/unixporn se ponga celoso

Además es el entorno perfecto para probar tus propias implementaciones o experimentar con paquetes populares y configurarlos exactamente a tu antojo.

#### ⚠️ Alerta de Potencial Pánico

Si es tu primera experiencia con entornos altamente configurables, muy probablemente NO consigas hacer funcionar tu **entorno ideal** en el primer intento. O en el segundo. Posiblemente ni en el tercero.

La realidad es que te tomará tiempo entender y acostumbrarte a la forma en la que funcionan muchas de las cosas del sistema. Y aunque por internet puedes encontrarte "instaladores" que vienen con un entorno pre-configurado (como Manjaro o EndeavourOS), probablemente en algún punto requerirá intervención manual.

Te animamos a que seas resiliente y te aventures a explorar este sistema. Más pronto que tarde será algo normal para ti. Y cuando llegue ese día, serás imparable.

### Requerimientos de Hardware (Spoiler: Son Mínimos)

En realidad esto no es Windows. Mientras tengas:
- Más de 512MB de RAM (sí, medio giga es suficiente)
- 2GB de espacio en disco
- Una USB para la instalación
- Paciencia de monje tibetano

Ya tienes todo lo necesario para poder instalar este maravilloso sistema.

**⚠️ Tendrás que deshabilitar el Secure Boot para la instalación.** Podrás volver a activarlo una vez termine el procedimiento (si sabes cómo, claro).

---

**📋 Esta es una guía completamente basada en la oficial proporcionada por [ArchLinux](https://wiki.archlinux.org/title/Installation_guide)**

**⚠️ Disclaimer Importante: Aunque no se requiere ser un experto para seguir esta guía, no me hago responsable de las consecuencias que puedan surgir de seguir estas instrucciones. Haz backups. Siempre. En serio.**

---

## 1. Pre-instalación: Preparando el Terreno

### 1.1 Descarga la Imagen ISO

Visita la página de descarga oficial en [ArchLinux Downloads](https://archlinux.org/download/), selecciona la región más cercana a tu ubicación, da clic y posteriormente da clic en la opción que termine en `.iso` (esto considerando que quieras usar el sistema en tu ordenador).

Adicionalmente, pero de forma opcional, puedes descargar también la opción que termina en `.iso.sig` - la necesitarás si decides realizar el siguiente paso de verificación.

### 1.2 Verificación del ISO (Opcional pero Recomendado)

Para evitar correr cualquier riesgo, puedes verificar la firma del ISO que acabas de descargar. Aunque en la práctica el riesgo es mínimo ya que los servidores espejo son constantemente monitoreados, es una buena práctica de seguridad.

Desde una terminal Unix con la herramienta `gpg` instalada y desde la carpeta donde descargaste el `.iso.sig`, ejecuta:

```bash
gpg --keyserver-options auto-key-retrieve --verify archlinux-version-x86_64.iso.sig
```

**Si estás haciendo esto desde Windows, tendrás que hacer este paso desde WSL.**

Al ejecutar deberías ver en alguna parte "Good signature from" y podrás proceder con la instalación con total seguridad. Caso contrario, descarga el `.iso` y el `.iso.sig` desde otra de las opciones en la página oficial.

### 1.3 Crear la Unidad Flash Booteable

Ya con tu `.iso` verificado, solo debes crear una unidad USB flash con una herramienta como [Balena Etcher](https://etcher.balena.io/) y asegúrate de seleccionar "GPT" como esquema de particiones.

Otras opciones populares incluyen Rufus (Windows) o `dd` (Linux/macOS) si te sientes aventurero.

---

## 2. Instalación: Aquí Empieza la Diversión

### 2.1 Iniciar Entorno Live

Con el USB conectado a tu ordenador (si es de escritorio, asegúrate de conectarlo directamente a la torre, no a un hub), reinicia y selecciona manualmente el dispositivo de arranque.

**Combinaciones de teclas comunes para acceder al menú de boot:**
- **F12** (más común)
- **F8**, **F10**, **F11** (depende del fabricante)
- **ESC** en algunos sistemas
- **F2** o **DEL** para entrar al BIOS/UEFI y cambiar el orden de arranque

Selecciona tu USB y presiona **Enter**.

Inmediatamente podrás ver un menú con varias opciones. Puedes navegar con las flechas del teclado, deberás seleccionar el que diga "Arch Linux install medium" y volver a presionar **Enter**.

### 2.2 Seleccionar Distribución de Teclado

Por defecto, la distribución de teclado de la consola es la de EE.UU. Si tu teclado es diferente, puedes listar el resto de distribuciones con:

```bash
localectl list-keymaps
```

Y puedes cargar la que necesites con `loadkeys`. Por ejemplo, para una distribución de teclado en español latinoamericano:

```bash
loadkeys la-latin1
```

Para español de España:
```bash
loadkeys es
```

### 2.3 Conectarse a Internet

Asegúrate de que la interfaz de red esté activada con:

```bash
ip link
```

#### Conexión por Cable Ethernet

Si puedes conectarte a tu módem/router con cable ethernet, puedes verificar la conexión con (finaliza el proceso con **Ctrl + C**):

```bash
ping google.com
```

#### Conexión WiFi

Si prefieres o necesitas hacerlo con WiFi, puedes usar el módulo `iwctl`. Primero tendrás que habilitarlo y posteriormente iniciarlo:

```bash
systemctl start iwd
iwctl
```

Después tendrás que identificar tu tarjeta de red con:

```bash
station list
```

Para ver las redes disponibles tendrás que ejecutar:

```bash
station [nombre-de-la-tarjeta] scan
station [nombre-de-la-tarjeta] get-networks
```

Y finalmente para conectarte tendrás que ejecutar:

```bash
station [nombre-de-la-tarjeta] connect 'Nombre-de-tu-WiFi'
```

Al presionar **Enter** te pedirá que ingreses la contraseña y para salir de la herramienta solo debes ejecutar `exit`.

De igual manera que con la conexión ethernet, puedes verificar la conexión con:

```bash
ping google.com
```

### 2.4 Sincronizar el Reloj del Sistema

Simplemente ejecuta:

```bash
timedatectl
```

Este comando sincroniza el reloj del sistema automáticamente.

### 2.5 Particionar el Disco (La Parte Que Da Miedo)

Este es un paso **MUY importante**. Asegúrate de poner suma atención en cada una de las acciones que realizas a continuación. Un error aquí puede significar la pérdida de datos.

#### 2.5.1 Identificar los Dispositivos de Bloque

Cuando el sistema reconoce un disco de almacenamiento, estos se asignan a un dispositivo de bloque como **/dev/sda**, **/dev/nvme0n1** o **/dev/mmcblk0**. Para identificar estos dispositivos, utiliza:

```bash
lsblk
```

**Nota importante:** Los discos NVMe aparecerán como **/dev/nvme0n1**, **/dev/nvme1n1**, etc. Los discos SATA aparecerán como **/dev/sda**, **/dev/sdb**, etc.

#### 2.5.2 Crear las Particiones

En este caso utilizaremos **fdisk** porque siempre está disponible en el entorno live. Para iniciar fdisk deberás ejecutar la utilidad más el dispositivo de bloque **(de ahora en adelante usaremos **/dev/sda** para el ejemplo, ajusta según tu caso)**:

```bash
fdisk /dev/sda
```

Una vez iniciada la herramienta deberás ejecutar `g` para crear una nueva tabla de particiones GPT vacía (esto **BORRARÁ** particiones anteriores):

```bash
g
```

Para nuestro Arch Linux necesitaremos 4 particiones:
1. **EFI (boot)** - Para el arranque del sistema
2. **Swap** - Memoria virtual
3. **Root (/)** - Sistema de archivos raíz
4. **Home (/home)** - Archivos de usuario


##### Partición EFI

Para crear la primera partición ejecuta `n`:

```bash
n
```

Usa estos valores:
- **Partition number:** Usa el valor por defecto, solo presiona **Enter**
- **First sector:** Usa el valor por defecto, solo presiona **Enter**
- **Last sector:** Recomendado 1GB. Ingresa `+1G`

##### Partición Swap

Continúa creando la partición para el **Swap**:
- **Partition number:** Valor por defecto, presiona **Enter**
- **First sector:** Valor por defecto, presiona **Enter**
- **Last sector:** Recomendado 4GB (ajusta según tu RAM). Ingresa `+4G`

##### Partición Root (/)

Crea la partición para la raíz:
- **Partition number:** Valor por defecto, presiona **Enter**
- **First sector:** Valor por defecto, presiona **Enter**
- **Last sector:** Recomendado 20GB mínimo. Ingresa `+20G`

##### Partición Home (/home)

Finalmente crea la partición para `/home`:
- **Partition number:** Valor por defecto, presiona **Enter**
- **First sector:** Valor por defecto, presiona **Enter**
- **Last sector:** Usa el espacio restante, solo presiona **Enter**

Para escribir tu configuración ejecuta:

```bash
w
```

La herramienta aplicará los cambios y regresarás a la terminal normal.

#### 2.5.3 Formatear las Particiones

Ahora hay que darle formato a cada partición:

**Partición EFI:**
```bash
mkfs.fat -F 32 /dev/sda1
```

**Partición Swap:**
```bash
mkswap /dev/sda2
```

**Partición Root:**
```bash
mkfs.ext4 /dev/sda3
```

**Partición Home:**
```bash
mkfs.ext4 /dev/sda4
```

#### 2.5.4 Montar las Particiones

Primero debes montar la partición raíz y continuar con el resto. Ejecuta cada uno de los siguientes comandos:

```bash
mount /dev/sda3 /mnt
mount --mkdir /dev/sda1 /mnt/boot
mount --mkdir /dev/sda4 /mnt/home
```

Para la partición Swap usa:

```bash
swapon /dev/sda2
```

¡Y con esto queda completada la parte más "terrorífica" de la instalación!

### 2.6 Instalar Paquetes Base

Usarás el script `pacstrap` para instalar el paquete base, un kernel de Linux y firmware para hardware común:

```bash
pacstrap -K /mnt base linux linux-firmware
```

Este proceso puede tomar varios minutos dependiendo de tu conexión a internet. Es un buen momento para prepararte un café.

### 2.7 Configurar el Sistema

#### 2.7.1 Generar el Archivo "fstab"

Este archivo se encarga de montar las particiones automáticamente al iniciar el sistema:

```bash
genfstab -U /mnt >> /mnt/etc/fstab
```

Ingresa a la raíz de tu nuevo sistema con:

```bash
arch-chroot /mnt
```

**¡Felicidades! Ya estás oficialmente dentro de tu sistema Arch Linux.**

#### 2.7.2 Definir la Zona Horaria

Dentro de la carpeta `/usr/share/zoneinfo/` encontrarás un conjunto de carpetas con diferentes ubicaciones. Navega a la más cercana a ti y encontrarás archivos con diferentes ciudades. Usa la más cercana para el siguiente comando:

**Ejemplos:**
- México: `ln -sf /usr/share/zoneinfo/Mexico/General /etc/localtime`
- España: `ln -sf /usr/share/zoneinfo/Europe/Madrid /etc/localtime`

```bash
ln -sf /usr/share/zoneinfo/Región/Ciudad /etc/localtime
```

#### 2.7.3 Generar el Archivo "/etc/adjtime"

Ejecuta el siguiente comando:

```bash
hwclock --systohc
```

#### 2.7.4 Configurar Idioma

Tendrás que editar el archivo `/etc/locale.gen` y descomentar los locales que necesites (para descomentar debes eliminar el carácter `#` que está al principio de la línea de interés).

Puedes usar `nano` o `vim` para editar el archivo. Si no tienes experiencia con **Vim**, te recomendamos encarecidamente usar `nano`:

```bash
nano /etc/locale.gen
```

**Busca y descomenta las líneas apropiadas:**
- Para español de México: `es_MX.UTF-8 UTF-8`
- Para español de España: `es_ES.UTF-8 UTF-8`
- Para inglés: `en_US.UTF-8 UTF-8` (recomendado mantener siempre)

Cuando hayas eliminado el `#` de las líneas que te interesan, presiona **Ctrl + O**, inmediatamente presiona **Enter** para guardar, y **Ctrl + X** para salir.

Cuando termines el paso anterior ejecuta:

```bash
locale-gen
```

Continúa creando el archivo `/etc/locale.conf`:

```bash
nano /etc/locale.conf
```

Escribe el locale principal dentro del archivo, por ejemplo:
```
LANG=es_MX.UTF-8
```

Para guardar: **Ctrl + O**, **Enter**, **Ctrl + X**.

Si cambiaste la distribución de teclado al inicio, hazla permanente:

```bash
nano /etc/vconsole.conf
```

Y escribe:
```
KEYMAP=la-latin1
```

#### 2.7.5 Configurar el Hostname

Crea el archivo `/etc/hostname` y escribe el nombre que le darás a tu ordenador:

```bash
nano /etc/hostname
```

Escribe el nombre dentro del archivo, por ejemplo: `mi-arch-pc`

Adicionalmente, aunque no es obligatorio, puedes crear el archivo `/etc/hosts` para resolver el localhost de manera local:

```bash
nano /etc/hosts
```

Dentro escribirás lo siguiente (reemplaza `mi-arch-pc` con el nombre que pusiste en hostname):

```
127.0.0.1    localhost
::1          localhost
127.0.1.1    mi-arch-pc.localdomain mi-arch-pc
```

#### 2.7.6 Contraseña Root

Ejecuta el siguiente comando y escribe una contraseña **segura** para el usuario root:

```bash
passwd
```

**Importante:** Esta contraseña debe ser segura. Es la llave maestra de tu sistema.

#### 2.7.7 Usuario Personal

Crea un usuario para las operaciones y el uso cotidiano:

```bash
useradd -m -G wheel -s /bin/bash tunombredeusuario
```

Asigna una contraseña a tu usuario:

```bash
passwd tunombredeusuario
```

Instala el paquete `sudo`:

```bash
pacman -S sudo
```

Habilita el uso del comando `sudo` para los usuarios del grupo `wheel`:

```bash
nano /etc/sudoers
```

Busca la línea que contenga `# %wheel ALL=(ALL:ALL) ALL` y elimina el carácter `#` al inicio de la línea.

Guarda con **Ctrl + O**, **Enter**, **Ctrl + X**.

#### 2.7.8 Confuguración NetworkManager (Red)

Instala el paquete `networkmanager`:

```bash
pacman -S networkmanager
```

Habilita el servicio:

```bash
systemctl enable NetworkManager
```

### 2.8 Instalación del Bootloader (GRUB)

#### 2.8.1 Instalación de Paquetes

Instala los paquetes necesarios con `pacman` (el gestor de paquetes de Arch Linux):

```bash
pacman -S grub efibootmgr
```

#### 2.8.2 Ejecutar Instalador GRUB

```bash
grub-install --target=x86_64-efi --efi-directory=/boot --bootloader-id=GRUB
```

#### 2.8.3 Generar Archivo de Configuración

```bash
grub-mkconfig -o /boot/grub/grub.cfg
```

### 2.9 Reiniciar y Momento de la Verdad

Ejecuta `exit` para salir del sistema instalado e inmediatamente ejecuta `reboot`:

```bash
exit
reboot
```

**¡Quita el USB antes de que se reinicie completamente!**

---

## ¡Felicidades! Has Conquistado Arch Linux 🎉

Así es, ya tienes todo lo necesario para comenzar a usar tu nuevo sistema Arch Linux. El resto depende completamente de ti.

Que tu límite sea únicamente dictado por tu imaginación (y tu paciencia para leer documentación).

### Primeros Pasos Post-Instalación

Una vez que reinicies podrás hacer login con el usuario que creaste. 

#### Conéctate a Internet

Ejecuta:

```bash
nmcli d wifi connect "el-nombre-de-tu-wifi" --ask
```

Te pedirá tu contraseña y luego te conectará a tu red.

#### Configura el audio

Instala los paquetes necesarios (`pipewire`, `pipewire-pulse`, `pipewire-alsa`, `pipewire-jack`, `wireplumber`, `pavucontrol`, `alsa-utils`):

```bash
sudo pacman -S pipewire pipewire-pulse pipewire-alsa pipewire-jack wireplumber pavucontrol alsa-utils
```

Habilita los servicios como usuario normal:

```bash
systemctl --user enable --now pipewire pipewire-pulse wireplumber
```

---

Algunas otras cosas que probablemente querrás hacer:

1. **Instalar un entorno gráfico** (GNOME, KDE, XFCE, i3wm, etc.)
2. **Configurar una conexión de red permanente**
3. **Instalar drivers de tu tarjeta gráfica**
4. **Instalar un AUR helper** como `yay` o `paru`
5. **Empezar a personalizar todo** hasta que quede exactamente como quieres

¡Bienvenido al club de "I use Arch BTW"! 😎

---

*¿Te sirvió esta guía? ¿Lograste instalar Arch sin llorar? Si esta guía te salvó de un formatting desastroso, compártela con esos amigos que aún creen que Ubuntu es "muy avanzado".*

---

## ¿Te resultó útil esta explicación?

Si este artículo te ayudó a entender mejor ArchLinux, también te recomendamos:

- [¿Qué es Docker?](/que-es-docker/)
- [¿Qué es Linux?](/que-es-linux/)
- [¿Qué es un Sistema operativo?](/que-es-un-sistema-operativo/)
- [¿Qué es AWS?](/que-es-aws/)
- [¿Qué es el SEO?](/que-es-el-seo/)

También puedes seguirme en mis redes sociales para más contenido sobre tecnología explicada de manera simple:

- [@yeremi_rrios](https://x.com/yeremi_rrios) en X
- [@yeremi.rrios](https://www.instagram.com/yeremi.rrios/) en Instagram y en Threads
