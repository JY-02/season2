# Generated by Django 5.0.1 on 2024-10-04 03:52

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('geniusback', '0002_titleimage'),
    ]

    operations = [
        migrations.AddField(
            model_name='titleimage',
            name='img_genre',
            field=models.CharField(default=0, max_length=256),
            preserve_default=False,
        ),
    ]
